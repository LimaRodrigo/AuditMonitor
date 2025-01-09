import * as React from 'react';
import './style.css';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { IInputs } from './generated/ManifestTypes';
import { HelperXrm } from './Helper/Utils';
import { IAttributesMetadata, IAudit, IAuditDetails, IDataRegister, IEntityDefinitions, IRetrieveRecordChangeHistoryResponse } from './models';
import { useState } from 'react';
import CardItens from './components/cardItens';
import { CardGroups } from './components/cardGroups';
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
  auditsGroup?: { [key: string]: IAudit[] }
}



export function Main(props: IMainProps) {
  const [state, setState] = useState<IMainState>({});

  React.useEffect(() => {
    const getData = async () => {
      try {
        const hpUtil = new HelperXrm(props.context);
        const audits: IAudit[] = [];
        const dataRegister = getDataRegister();
        const [promiseAudit, promiseMetadataAttributes] = await Promise.all([hpUtil.RetrieveRecordChangeHistoryRequest(dataRegister.entityLogicalName, dataRegister.id), getMetadataAttributes(dataRegister.entityLogicalName)]);
        promiseAudit.AuditDetailCollection.AuditDetails.forEach((auditDynamics: IAuditDetails) => {
          audits.push(hpUtil.ConvertAuditDynamicsToAudit(auditDynamics, promiseMetadataAttributes));
        });

        setState({
          dataRegister: dataRegister,
          auditsDynamics: promiseAudit,
          metadataAttributes: promiseMetadataAttributes as IAttributesMetadata[],
          audits: audits,
          auditsGroup: hpUtil.groupAuditsByDate(audits)
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    getData();
  }, [props.name]);




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
        {state.auditsGroup && Object.keys(state.auditsGroup).map((key, xi) => {
          return (
            <CardGroups key={"card-groups-" + key} date={new Date(key + "T00:00").toLocaleDateString()}>
              {state.auditsGroup![key].map((audit, yi) => {
                return (
                  audit.attributes.length > 0 &&
                  <CardItens
                    key={"card-" + audit.id}
                    hour={audit.hour}
                    action={audit.operation}
                    name={audit.user.name}
                    totalFields={audit.attributes.length}
                    firts={yi === state.auditsGroup![key].length - 2 && xi === Object.keys(state.auditsGroup!).length - 1}
                    attributes={audit.attributes}
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