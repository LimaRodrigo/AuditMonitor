import * as React from 'react';
import './style.css';
import { IInputs } from './generated/ManifestTypes';
import { HelperXrm } from './Helper/Utils';
import {
  IAttributesMetadata,
  IAudit,
  IAuditDetails,
  IDataRegister,
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
}



export function Main(props: IMainProps) {
  const [state, setState] = useState<IMainState>({ txtFilter: "" });
  const inputId = useId("inputSearch");
  const helper = new HelperXrm(props.context);
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

    const audits: IAudit[] = [];
    const dataRegister = getDataRegister();
    const [promiseAudit, promiseMetadataAttributes] = await Promise.all([
      helper.RetrieveRecordChangeHistoryRequest(dataRegister.entityLogicalName, dataRegister.id),
      helper.getMetadataAttributes(dataRegister.entityLogicalName)
    ]);
    promiseAudit.AuditDetailCollection.AuditDetails.forEach((auditDynamics: IAuditDetails) => {
      audits.push(helper.ConvertAuditDynamicsToAudit(auditDynamics, promiseMetadataAttributes));
    });
    let auditFilter: IAudit[] | undefined = audits;
    const normalizedSearchText = helper.normalizeText(val);
    if (val) {
      auditFilter = state.audits?.filter(
        x => x.attributes.some(x => helper.normalizeText(x.displayName).includes(normalizedSearchText)));
    }


    setState({
      dataRegister: {
        //eslint-disable-next-line
        //@ts-ignore
        id: props.context?.mode.contextInfo.entityId,
        //eslint-disable-next-line
        //@ts-ignore
        entityLogicalName: props.context?.mode.contextInfo.entityTypeName
      } as IDataRegister,
      auditsDynamics: promiseAudit,
      metadataAttributes: promiseMetadataAttributes as IAttributesMetadata[],
      audits: auditFilter,
      auditsGroup: helper.groupAuditsByDate(auditFilter),
      txtFilter: val,
    });
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


  return (
    <div className='audit-monitor-container-main'>
      {console.log("State", state)}
      <FluentProvider theme={webLightTheme}>
        <div className='audit-monitor-container-main-search'>
          <Input
            id={inputId}
            contentBefore={<SearchSparkle16Filled />}
            placeholder='Digite o campo desejado.'
            onChange={(e, data) => getData(data.value)}
            style={{ width: "100%" }}
            value={state.txtFilter}
            as='input'
            type='text'
          />
          <Button
            onClick={async () => await getData()}
            icon={<ArrowClockwise16Regular />}
          />
        </div>
        {state.auditsGroup && Object.keys(state.auditsGroup).map((key, xi) => {
          return (
            <CardGroups key={"card-groups-" + key} date={new Date(key + "T00:00").toLocaleDateString()}>
              {state.auditsGroup![key].map((audit, yi) => {
                return (
                  // audit.attributes.length > 0 &&
                  <CardItens
                    key={"card-" + yi + audit.id}
                    hour={audit.hour}
                    action={audit.action}
                    name={audit.user.name}
                    totalFields={audit.attributes.length}
                    firts={yi === state.auditsGroup![key].length - 1 && xi === Object.keys(state.auditsGroup!).length - 1}
                    attributes={audit.attributes.filter(x => helper.normalizeText(x.displayName).includes(helper.normalizeText(state.txtFilter)))}
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