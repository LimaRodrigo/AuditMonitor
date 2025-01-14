import { IInputs } from "../generated/ManifestTypes";
import { mockAudit, mockMetadata } from "../Mock";
import {
    IAttributesMetadata,
    IAudit,
    IAuditDetails,
    IDataAttributes,
    IEntityDefinitions,
    IResponseRequest,
    IRetrieveRecordChangeHistoryResponse,
    IXrmParameterTypeCollection,
    IXrmRequest,
    IXrmRequestMetadata
} from "../models";

interface IHelperXrm {
    context?: ComponentFramework.Context<IInputs> | undefined;
}

export class HelperXrm implements IHelperXrm {
    context?: ComponentFramework.Context<IInputs> | undefined;

    constructor(context: ComponentFramework.Context<IInputs> | undefined) {
        this.context = context;
    }

    async RetrieveMultipleAsync(entityName: string, optionOdata?: string): Promise<object> {
        return new Promise((resolve, reject) => {
            this.context?.webAPI.retrieveMultipleRecords(entityName, optionOdata).then(
                (result) => { return resolve(result.entities); },
                (e) => { return reject(e); }
            )
        });
    }
    async FetchJS(url: string): Promise<object[]> {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    if (!response.ok)
                        return reject("erro");
                    return response.json();
                }).then((data) => {
                    return resolve(data.value);
                }).catch((e) => reject(e));
        });
    }
    ConvertAuditDynamicsToAudit(auditDynamics: IAuditDetails, metadataAttributes?: IAttributesMetadata[]): IAudit {
        const dataAttributes: IDataAttributes[] = [];
        const propsAuditDynamics = Object.keys(auditDynamics);
        const propsOld = propsAuditDynamics.includes("OldValue") ? Object.keys(auditDynamics.OldValue!) : [];
        const propsNew = propsAuditDynamics.includes("NewValue") ? Object.keys(auditDynamics.NewValue!) : [];

        metadataAttributes?.forEach((meta) => {
            if (propsNew.includes(meta.logicalName)) {
                dataAttributes.push({
                    logicalName: meta.logicalName,
                    displayName: meta.displayName,
                    oldValue: propsOld.includes(meta.logicalName) ? auditDynamics.OldValue![meta.logicalName] : "",
                    newValue: propsNew.includes(meta.logicalName) ? auditDynamics.NewValue![meta.logicalName] : ""
                });
            }
            else if (propsNew.includes(`_${meta.logicalName}_value`)) {
                dataAttributes.push({
                    logicalName: meta.logicalName,
                    displayName: meta.displayName,
                    oldValue: propsOld.includes(`_${meta.logicalName}_value`) ? auditDynamics.OldValue![`_${meta.logicalName}_value@OData.Community.Display.V1.FormattedValue`] : "",
                    newValue: propsNew.includes(`_${meta.logicalName}_value`) ? auditDynamics.NewValue![`_${meta.logicalName}_value@OData.Community.Display.V1.FormattedValue`] : ""
                });
            }
        });


        return {
            id: auditDynamics.AuditRecord.auditid,
            date: new Date(auditDynamics.AuditRecord["createdon"]),
            hour: auditDynamics.AuditRecord["createdon@OData.Community.Display.V1.FormattedValue"].split(" ")[1],
            action: auditDynamics.AuditRecord["action@OData.Community.Display.V1.FormattedValue"],
            user: {
                id: auditDynamics.AuditRecord._userid_value,
                name: auditDynamics.AuditRecord["_userid_value@OData.Community.Display.V1.FormattedValue"],
                entityType: auditDynamics.AuditRecord["_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname"]
            },
            attributes: dataAttributes
        } as IAudit;
    }
    async RetrieveRecordChangeHistoryRequest(entityLogicalName: string, registerId: string): Promise<IRetrieveRecordChangeHistoryResponse> {
        if (window.location.href.includes("localhost")) {
            return new Promise((resolve, reject) => {
                return resolve(mockAudit);
            });
        }

        const target = Object.create(null);
        target["@odata.type"] = `Microsoft.Dynamics.CRM.${entityLogicalName}`;
        target[entityLogicalName + "id"] = registerId;

        const parametrs: IXrmParameterTypeCollection = {
            Target: { structuralProperty: 5, typeName: "mscrm.crmbaseentity" },
        }

        const metadata: IXrmRequestMetadata = {
            parameterTypes: parametrs,
            operationType: 1,
            operationName: "RetrieveRecordChangeHistory",
        };
        const request: IXrmRequest = {
            Target: target,
            getMetadata: () => metadata
        }
        return new Promise((resolve, reject) => {
            //eslint-disable-next-line
            //@ts-ignore
            Xrm.WebApi.online.execute(request).then(
                (result: IResponseRequest) => {
                    return result?.ok ? resolve(result?.json() as IRetrieveRecordChangeHistoryResponse) : reject(result?.ok);
                },
                (error: object) => { return reject(error); }
            ).catch((e: object) => reject(e));
        });
    }
    getMetadataAttributes = async (entityLogicalName: string): Promise<IAttributesMetadata[]> => {
        if (window.location.href.includes("localhost")) {
            return new Promise((resolve, reject) => {
                return resolve(mockMetadata);
            });
        }
        const metadata: IAttributesMetadata[] = [];
        const response = await this.FetchJS(`api/data/v9.1/EntityDefinitions(LogicalName='${entityLogicalName}')/Attributes?$select=LogicalName,DisplayName&$filter=AttributeOf eq null&$orderby=DisplayName asc`) as IEntityDefinitions[];
        response.forEach((element: IEntityDefinitions) => {
            metadata.push({
                logicalName: element.LogicalName,
                displayName: element.DisplayName.UserLocalizedLabel?.Label
            });
        });
        return metadata;
    }

    truncateText(text: string): string {
        const maxLength = 23;
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    }
    groupAuditsByDate(audits: IAudit[] | undefined): { [key: string]: IAudit[] } | undefined {
        if (!audits || audits.length == 0)
            return undefined;

        return audits.reduce((acc, audit) => {
            const dateKey = audit.date.toISOString().split('T')[0]; // Use only the date part
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(audit);
            return acc;
        }, {} as { [key: string]: IAudit[] });
    }
    normalizeText(text: string | undefined | null): string {
        if (!text) return "";
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
}
