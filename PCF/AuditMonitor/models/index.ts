export interface IEntityDefinitions {
    LogicalName: string;
    DisplayName: IDisplayName;
}
export interface IDisplayName {
    UserLocalizedLabel: IUserLocalizedLabel;
}
export interface IUserLocalizedLabel {
    Label: string;
}


export interface IAudit {
    id: string;
    date: Date;
    hour?: string;
    action: string;
    user: ILookup;
    attributes: IDataAttributes[];
}

export interface IAuditDynamics {
    createdon: string;
    auditid: string;
    "action@OData.Community.Display.V1.FormattedValue": string;
    _userid_value: string;
    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": string;
    "_userid_value@OData.Community.Display.V1.FormattedValue": string;
    changedata: string;
}
export interface IChangeData {
    changedAttributes: IDataAttributes[];
}
export interface IDataAttributes {
    logicalName: string;
    displayName?: string | null;
    oldValue?: string | number | object | boolean;
    newValue?: string | number | object | boolean;
}

export interface IAttributesMetadata {
    logicalName: string;
    displayName: string;
}

interface ILookup {
    id: string;
    name: string;
    entityType: string;
}

export interface IDataRegister {
    id: string;
    entityLogicalName: string;
}
export interface IRetrieveRecordChangeHistoryResponse {
    AuditDetailCollection: IAuditDetailCollection;
}

export interface IAuditDetailCollection {
    AuditDetails: IAuditDetails[];
}

export interface IAuditDetails {
    OldValue?: IobjGerenic;
    NewValue?: IobjGerenic;
    AuditRecord: IAuditRecord;
}

export interface IAuditRecord {
    auditid: string;
    createdon: string;
    "createdon@OData.Community.Display.V1.FormattedValue": string;
    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": string;
    "action@OData.Community.Display.V1.FormattedValue": string;
    "_userid_value@OData.Community.Display.V1.FormattedValue": string;
    "_userid_value": string;
}

export interface IobjGerenic {
    [property: string]: string | number | object | boolean;
}