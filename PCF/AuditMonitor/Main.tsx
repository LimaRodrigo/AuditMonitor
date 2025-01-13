import * as React from 'react';
import './style.css';
import { IInputs } from './generated/ManifestTypes';
import { HelperXrm } from './Helper/Utils';
import {
  IAttributesMetadata,
  IAudit,
  IAuditDetails,
  IDataRegister,
  IEntityDefinitions,
  IRetrieveRecordChangeHistoryResponse
} from './models';
import { useState } from 'react';
import CardItens from './components/cardItens';
import { CardGroups } from './components/cardGroups';
import {
  Button,
  FluentProvider,
  Input,
  webLightTheme,
  useId
} from '@fluentui/react-components';
import {
  ArrowClockwise16Regular,
  SearchSparkle16Filled
} from "@fluentui/react-icons";
import { mockMetadata } from './Mock';

export interface IMainProps {
  name?: string;
  context?: ComponentFramework.Context<IInputs>;
}
interface IMainState {
  dataRegister?: IDataRegister;
  auditsDynamics?: IRetrieveRecordChangeHistoryResponse;
  metadataAttributes?: IAttributesMetadata[];
  audits?: IAudit[],
  auditsGroup?: { [key: string]: IAudit[] } | undefined,
  txtFilter?: string | undefined,
  txtDefault?: string | undefined
}



export function Main(props: IMainProps) {
  const [state, setState] = useState<IMainState>({ txtFilter: "" });
  const [stateNew, setStatenew] = useState<number>(0);
  const inputId = useId("inputSearch");

  React.useEffect(() => {
    const getDataOnload = async () => {
      try {
        await getData();
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    getDataOnload();
  }, [props.name]);

  const getData = async (val?: string) => {
    const hpUtil = new HelperXrm(props.context);
    const audits: IAudit[] = [];
    const dataRegister = getDataRegister();
    const [promiseAudit, promiseMetadataAttributes] = await Promise.all([
      hpUtil.RetrieveRecordChangeHistoryRequest(dataRegister.entityLogicalName, dataRegister.id),
      getMetadataAttributes(dataRegister.entityLogicalName)
    ]);
    promiseAudit.AuditDetailCollection.AuditDetails.forEach((auditDynamics: IAuditDetails) => {
      audits.push(hpUtil.ConvertAuditDynamicsToAudit(auditDynamics, promiseMetadataAttributes));
    });

    setState({
      dataRegister: dataRegister,
      auditsDynamics: promiseAudit,
      metadataAttributes: promiseMetadataAttributes as IAttributesMetadata[],
      audits: audits,
      auditsGroup: hpUtil.groupAuditsByDate(audits),
      txtFilter: "",
      txtDefault: "",
    });
  }


  const getItensFilter = (val: string) => {
    // console.log("getItensFilter", val);
    const hpUtil = new HelperXrm(props.context);
    const normalizedSearchText = hpUtil.normalizeText(val);
    const auditFilter = state.audits?.filter(
      x => x.attributes.some(x => hpUtil.normalizeText(x.displayName).includes(normalizedSearchText)));
    setState({
      ...state,
      txtFilter: val,
      auditsGroup: hpUtil.groupAuditsByDate(auditFilter)
    })

  }
  const getDataRegister = (): IDataRegister => {
    return {
      //eslint-disable-next-line
      //@ts-ignore
      id: props.context?.mode.contextInfo.entityId,
      //eslint-disable-next-line
      //@ts-ignore
      entityLogicalName: props.context?.mode.contextInfo.entityTypeName
    } as IDataRegister;
  }
  const getMetadataAttributes = async (entityLogicalName: string): Promise<IAttributesMetadata[]> => {
    if (window.location.href.includes("localhost")) {
      return new Promise((resolve, reject) => {
        return resolve(mockMetadata);
      });
    }
    const metadata: IAttributesMetadata[] = [];
    const hpUtil = new HelperXrm(props.context);
    const response = await hpUtil.FetchJS(`api/data/v9.1/EntityDefinitions(LogicalName='${entityLogicalName}')/Attributes?$select=LogicalName,DisplayName&$filter=AttributeOf eq null&$orderby=DisplayName asc`) as IEntityDefinitions[];

    response.forEach((element: IEntityDefinitions) => {
      metadata.push({
        logicalName: element.LogicalName,
        displayName: element.DisplayName.UserLocalizedLabel?.Label
      });
    });

    return metadata;
  }

  return (
    <div className='audit-monitor-container-main'>
      {console.log("State", state)}
      <FluentProvider theme={webLightTheme}>
        <div className='audit-monitor-container-main-search'>
          <Input
            id={inputId}
            contentBefore={<SearchSparkle16Filled />}
            placeholder='Digite o campo desejado.'
            onChange={(e, data) => { setState({ ...state, txtFilter: data.value }) }}
            style={{ width: "100%" }}
            value={state.txtFilter}
            as='input'
            type='text'
          />
          <Button
            // onClick={async () => await getData()}
            onClick={() => { setState({ ...state, txtFilter: "" }); setStatenew(stateNew + 1) }}
            icon={<ArrowClockwise16Regular />}
          />
        </div>
        {state.auditsGroup && Object.keys(state.auditsGroup).map((key, xi) => {
          return (
            <CardGroups key={"card-groups-" + key} date={new Date(key + "T00:00").toLocaleDateString()}>
              {state.auditsGroup![key].map((audit, yi) => {
                return (
                  audit.attributes.length > 0 &&
                  <CardItens
                    key={"card-" + yi + audit.id}
                    hour={audit.hour}
                    action={audit.operation}
                    name={audit.user.name}
                    totalFields={audit.attributes.length}
                    firts={yi === state.auditsGroup![key].length - 2 && xi === Object.keys(state.auditsGroup!).length - 1}
                    attributes={audit.attributes.filter(x => x.displayName?.includes(state.txtFilter || ""))}
                  />
                );
              })}
            </CardGroups>
          )
        })
        }
      </FluentProvider>
    </div>
  );
}