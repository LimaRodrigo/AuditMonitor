import { IAttributesMetadata, IRetrieveRecordChangeHistoryResponse } from "../models";

export const mockMetadata: IAttributesMetadata[] = [
    {
        "logicalName": "accountcategorycode",
        "displayName": "Categoria"
    },
    {
        "logicalName": "accountclassificationcode",
        "displayName": "Classificação"
    },
    {
        "logicalName": "accountid",
        "displayName": "Conta"
    },
    {
        "logicalName": "accountnumber",
        "displayName": "Número da Conta"
    },
    {
        "logicalName": "accountratingcode",
        "displayName": "Classificação da Conta"
    },
    {
        "logicalName": "address1_addressid",
        "displayName": "Endereço 1: ID"
    },
    {
        "logicalName": "address1_addresstypecode",
        "displayName": "Endereço 1: Tipo de Endereço"
    },
    {
        "logicalName": "address1_city",
        "displayName": "Endereço 1: Cidade"
    },
    {
        "logicalName": "address1_composite",
        "displayName": "Endereço 1"
    },
    {
        "logicalName": "address1_country",
        "displayName": "Endereço 1: País/Região"
    },
    {
        "logicalName": "address1_county",
        "displayName": "Endereço 1: Município"
    },
    {
        "logicalName": "address1_fax",
        "displayName": "Endereço 1: Fax"
    },
    {
        "logicalName": "address1_freighttermscode",
        "displayName": "Endereço 1: Condições de Frete"
    },
    {
        "logicalName": "address1_latitude",
        "displayName": "Endereço 1: Latitude"
    },
    {
        "logicalName": "address1_line1",
        "displayName": "Endereço 1: Rua 1"
    },
    {
        "logicalName": "address1_line2",
        "displayName": "Endereço 1: Rua 2"
    },
    {
        "logicalName": "address1_line3",
        "displayName": "Endereço 1: Rua 3"
    },
    {
        "logicalName": "address1_longitude",
        "displayName": "Endereço 1: Longitude"
    },
    {
        "logicalName": "address1_name",
        "displayName": "Endereço 1: Nome"
    },
    {
        "logicalName": "address1_postalcode",
        "displayName": "Endereço 1: CEP"
    },
    {
        "logicalName": "address1_postofficebox",
        "displayName": "Endereço 1: Caixa Postal"
    },
    {
        "logicalName": "address1_primarycontactname",
        "displayName": "Endereço 1: Nome do Contato Primário"
    },
    {
        "logicalName": "address1_shippingmethodcode",
        "displayName": "Endereço 1: Método de Entrega"
    },
    {
        "logicalName": "address1_stateorprovince",
        "displayName": "Endereço 1: Estado"
    },
    {
        "logicalName": "address1_telephone1",
        "displayName": "Telefone do Endereço"
    },
    {
        "logicalName": "address1_telephone2",
        "displayName": "Endereço 1: Telefone 2"
    },
    {
        "logicalName": "address1_telephone3",
        "displayName": "Endereço 1: Telefone 3"
    },
    {
        "logicalName": "address1_upszone",
        "displayName": "Endereço 1: Zona UPS"
    },
    {
        "logicalName": "address1_utcoffset",
        "displayName": "Endereço 1: Compensação UTC"
    },
    {
        "logicalName": "address2_addressid",
        "displayName": "Endereço 2: ID"
    },
    {
        "logicalName": "address2_addresstypecode",
        "displayName": "Endereço 2: Tipo de Endereço"
    },
    {
        "logicalName": "address2_city",
        "displayName": "Endereço 2: Cidade"
    },
    {
        "logicalName": "address2_composite",
        "displayName": "Endereço 2"
    },
    {
        "logicalName": "address2_country",
        "displayName": "Endereço 2: País/Região"
    },
    {
        "logicalName": "address2_county",
        "displayName": "Endereço 2: Município"
    },
    {
        "logicalName": "address2_fax",
        "displayName": "Endereço 2: Fax"
    },
    {
        "logicalName": "address2_freighttermscode",
        "displayName": "Endereço 2: Condições de Frete"
    },
    {
        "logicalName": "address2_latitude",
        "displayName": "Endereço 2: Latitude"
    },
    {
        "logicalName": "address2_line1",
        "displayName": "Endereço 2: Rua 1"
    },
    {
        "logicalName": "address2_line2",
        "displayName": "Endereço 2: Rua 2"
    },
    {
        "logicalName": "address2_line3",
        "displayName": "Endereço 2: Rua 3"
    },
    {
        "logicalName": "address2_longitude",
        "displayName": "Endereço 2: Longitude"
    },
    {
        "logicalName": "address2_name",
        "displayName": "Endereço 2: Nome"
    },
    {
        "logicalName": "address2_postalcode",
        "displayName": "Endereço 2: CEP"
    },
    {
        "logicalName": "address2_postofficebox",
        "displayName": "Endereço 2: Caixa Postal"
    },
    {
        "logicalName": "address2_primarycontactname",
        "displayName": "Endereço 2: Nome do Contato Primário"
    },
    {
        "logicalName": "address2_shippingmethodcode",
        "displayName": "Endereço 2: Método de Entrega"
    },
    {
        "logicalName": "address2_stateorprovince",
        "displayName": "Endereço 2: Estado"
    },
    {
        "logicalName": "address2_telephone1",
        "displayName": "Endereço 2: Telefone 1"
    },
    {
        "logicalName": "address2_telephone2",
        "displayName": "Endereço 2: Telefone 2"
    },
    {
        "logicalName": "address2_telephone3",
        "displayName": "Endereço 2: Telefone 3"
    },
    {
        "logicalName": "address2_upszone",
        "displayName": "Endereço 2: Zona UPS"
    },
    {
        "logicalName": "address2_utcoffset",
        "displayName": "Endereço 2: Compensação UTC"
    },
    {
        "logicalName": "adx_createdbyipaddress",
        "displayName": "Created By (IP Address)"
    },
    {
        "logicalName": "adx_createdbyusername",
        "displayName": "Created By (User Name)"
    },
    {
        "logicalName": "adx_modifiedbyipaddress",
        "displayName": "Modified By (IP Address)"
    },
    {
        "logicalName": "adx_modifiedbyusername",
        "displayName": "Modified By (User Name)"
    },
    {
        "logicalName": "aging30",
        "displayName": "Vencimento em 30 dias"
    },
    {
        "logicalName": "aging30_base",
        "displayName": "Vencimento em 30 dias (Base)"
    },
    {
        "logicalName": "aging60",
        "displayName": "Vencimento em 60 dias"
    },
    {
        "logicalName": "aging60_base",
        "displayName": "Vencimento em 60 dias (Base)"
    },
    {
        "logicalName": "aging90",
        "displayName": "Vencimento em 90 dias"
    },
    {
        "logicalName": "aging90_base",
        "displayName": "Vencimento em 90 dias (Base)"
    },
    {
        "logicalName": "businesstypecode",
        "displayName": "Tipo de Empresa"
    },
    {
        "logicalName": "createdby",
        "displayName": "Criada por"
    },
    {
        "logicalName": "createdbyexternalparty",
        "displayName": "Criado por (Participante Externo)"
    },
    {
        "logicalName": "createdon",
        "displayName": "Data de Criação"
    },
    {
        "logicalName": "createdonbehalfby",
        "displayName": "Criado por (Delegado)"
    },
    {
        "logicalName": "creditlimit",
        "displayName": "Limite de Crédito"
    },
    {
        "logicalName": "creditlimit_base",
        "displayName": "Limite de Crédito (Base)"
    },
    {
        "logicalName": "creditonhold",
        "displayName": "Suspensão de Crédito"
    },
    {
        "logicalName": "customersizecode",
        "displayName": "Tamanho do Cliente"
    },
    {
        "logicalName": "customertypecode",
        "displayName": "Tipo de Relação"
    },
    {
        "logicalName": "description",
        "displayName": "Descrição"
    },
    {
        "logicalName": "donotbulkemail",
        "displayName": "Não permitir Emails em Massa"
    },
    {
        "logicalName": "donotbulkpostalmail",
        "displayName": "Não permitir Correspondência em Massa"
    },
    {
        "logicalName": "donotemail",
        "displayName": "Não permitir Emails"
    },
    {
        "logicalName": "donotfax",
        "displayName": "Não permitir Faxes"
    },
    {
        "logicalName": "donotphone",
        "displayName": "Não permitir Telefonemas"
    },
    {
        "logicalName": "donotpostalmail",
        "displayName": "Não permitir Correspondência"
    },
    {
        "logicalName": "donotsendmm",
        "displayName": "Enviar Materiais de Marketing"
    },
    {
        "logicalName": "emailaddress1",
        "displayName": "Email"
    },
    {
        "logicalName": "emailaddress2",
        "displayName": "Endereço de Email 2"
    },
    {
        "logicalName": "emailaddress3",
        "displayName": "Endereço de Email 3"
    },
    {
        "logicalName": "entityimageid",
        "displayName": "ID da Imagem da Entidade"
    },
    {
        "logicalName": "exchangerate",
        "displayName": "Taxa de Câmbio"
    },
    {
        "logicalName": "fax",
        "displayName": "Fax"
    },
    {
        "logicalName": "followemail",
        "displayName": "Acompanhar Atividade de Email"
    },
    {
        "logicalName": "ftpsiteurl",
        "displayName": "Site FTP"
    },
    {
        "logicalName": "importsequencenumber",
        "displayName": "Número de Sequência de Importação"
    },
    {
        "logicalName": "industrycode",
        "displayName": "Setor"
    },
    {
        "logicalName": "lastonholdtime",
        "displayName": "Última Suspensão"
    },
    {
        "logicalName": "lastusedincampaign",
        "displayName": "Data da Última Inclusão na Campanha"
    },
    {
        "logicalName": "marketcap",
        "displayName": "Capitalização de Mercado"
    },
    {
        "logicalName": "marketcap_base",
        "displayName": "Capitalização de Mercado (Base)"
    },
    {
        "logicalName": "marketingonly",
        "displayName": "Somente Marketing"
    },
    {
        "logicalName": "masterid",
        "displayName": "ID Mestra"
    },
    {
        "logicalName": "merged",
        "displayName": "Mesclado"
    },
    {
        "logicalName": "modifiedby",
        "displayName": "Modificado por"
    },
    {
        "logicalName": "modifiedbyexternalparty",
        "displayName": "Modificado por (Participante Externo)"
    },
    {
        "logicalName": "modifiedon",
        "displayName": "Data de Modificação"
    },
    {
        "logicalName": "modifiedonbehalfby",
        "displayName": "Modificado por (Delegado)"
    },
    {
        "logicalName": "msa_managingpartnerid",
        "displayName": "Managing Partner"
    },
    {
        "logicalName": "name",
        "displayName": "Nome da Conta"
    },
    {
        "logicalName": "numberofemployees",
        "displayName": "Número de Funcionários"
    },
    {
        "logicalName": "onholdtime",
        "displayName": "Tempo de Suspensão (Minutos)"
    },
    {
        "logicalName": "overriddencreatedon",
        "displayName": "Registro Criado em"
    },
    {
        "logicalName": "ownerid",
        "displayName": "Proprietário"
    },
    {
        "logicalName": "ownershipcode",
        "displayName": "Propriedade"
    },
    {
        "logicalName": "owningbusinessunit",
        "displayName": "Unidade de Negócios Proprietária"
    },
    {
        "logicalName": "owningteam",
        "displayName": "Equipe Proprietária"
    },
    {
        "logicalName": "owninguser",
        "displayName": "Usuário Proprietário"
    },
    {
        "logicalName": "parentaccountid",
        "displayName": "Conta Primária"
    },
    {
        "logicalName": "participatesinworkflow",
        "displayName": "Participa no Fluxo de Trabalho"
    },
    {
        "logicalName": "paymenttermscode",
        "displayName": "Condições de Pagamento"
    },
    {
        "logicalName": "preferredappointmentdaycode",
        "displayName": "Dia Preferencial"
    },
    {
        "logicalName": "preferredappointmenttimecode",
        "displayName": "Horário Preferencial"
    },
    {
        "logicalName": "preferredcontactmethodcode",
        "displayName": "Forma Preferencial de Contato"
    },
    {
        "logicalName": "preferredsystemuserid",
        "displayName": "Usuário Preferencial"
    },
    {
        "logicalName": "primarycontactid",
        "displayName": "Contato Primário"
    },
    {
        "logicalName": "primarysatoriid",
        "displayName": "ID Principal do Satori"
    },
    {
        "logicalName": "primarytwitterid",
        "displayName": "ID Principal do Twitter"
    },
    {
        "logicalName": "processid",
        "displayName": "Processo"
    },
    {
        "logicalName": "revenue",
        "displayName": "Receita Anual"
    },
    {
        "logicalName": "revenue_base",
        "displayName": "Receita Anual (Base)"
    },
    {
        "logicalName": "sharesoutstanding",
        "displayName": "Ações em Circulação"
    },
    {
        "logicalName": "shippingmethodcode",
        "displayName": "Método de Entrega"
    },
    {
        "logicalName": "sic",
        "displayName": "CNAE"
    },
    {
        "logicalName": "slaid",
        "displayName": "SLA"
    },
    {
        "logicalName": "slainvokedid",
        "displayName": "Último SLA aplicado"
    },
    {
        "logicalName": "stageid",
        "displayName": "(Preterido) Estágio do Processo"
    },
    {
        "logicalName": "statecode",
        "displayName": "Status"
    },
    {
        "logicalName": "statuscode",
        "displayName": "Razão do Status"
    },
    {
        "logicalName": "stockexchange",
        "displayName": "Bolsa de Valores"
    },
    {
        "logicalName": "telephone1",
        "displayName": "Telefone Principal"
    },
    {
        "logicalName": "telephone2",
        "displayName": "Outro Telefone"
    },
    {
        "logicalName": "telephone3",
        "displayName": "Telefone 3"
    },
    {
        "logicalName": "territorycode",
        "displayName": "Código da Região"
    },
    {
        "logicalName": "tickersymbol",
        "displayName": "Símbolo de Ação"
    },
    {
        "logicalName": "timespentbymeonemailandmeetings",
        "displayName": "Tempo Gasto por Mim"
    },
    {
        "logicalName": "timezoneruleversionnumber",
        "displayName": "Número de Versão da Regra de Fuso Horário"
    },
    {
        "logicalName": "transactioncurrencyid",
        "displayName": "Moeda"
    },
    {
        "logicalName": "traversedpath",
        "displayName": "(Preterido) Caminho Percorrido"
    },
    {
        "logicalName": "utcconversiontimezonecode",
        "displayName": "Código de Fuso Horário de Conversão de UTC"
    },
    {
        "logicalName": "versionnumber",
        "displayName": "Número da Versão"
    },
    {
        "logicalName": "websiteurl",
        "displayName": "Site"
    },
    {
        "logicalName": "yominame",
        "displayName": "Nome da Conta Yomi"
    }
]

export const mockAudit: IRetrieveRecordChangeHistoryResponse = {
    "AuditDetailCollection": {
        "AuditDetails": [
            {           
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "14/01/2025 09:10",
                    "createdon": "2025-01-14T12:10:54Z",
                    "auditid": "cb71a776-51b3-4c33-a33d-6b3dd4dc4964",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Maria dos santos da silva",
                    "_userid_value": "9cd747da-6fd2-ef11-a72e-000d3ac1d307",
                    "attributemask": "26,18,43,40"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "fax": "121232123131",
                    "telephone1": "21982624"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "paymenttermscode@OData.Community.Display.V1.FormattedValue": "Vencimento em 30 dias",
                    "paymenttermscode": 1,
                    "fax": "11678678",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "telephone1": "218898978"
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "13/01/2025 18:19",
                    "createdon": "2025-01-13T21:19:59Z",
                    "auditid": "67e22676-51cc-4547-9a53-c52791524a83",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "40"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "telephone1": "21982624600"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "telephone1": "21982624"
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "09/01/2025 17:10",
                    "createdon": "2025-01-09T20:10:31Z",
                    "auditid": "b4970180-588c-49c7-8c7a-e24b606cd59d",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "25,24,186"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "numberofemployees@OData.Community.Display.V1.FormattedValue": "100",
                    "numberofemployees": 100,
                    "revenue_base": 10000000,
                    "revenue": 10000000
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "09/01/2025 17:09",
                    "createdon": "2025-01-09T20:09:39Z",
                    "auditid": "300a82ae-9585-4d3a-b74b-e71a30f689b1",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "87,92"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "address1_shippingmethodcode@OData.Community.Display.V1.FormattedValue": "DHL",
                    "address1_shippingmethodcode": 2,
                    "address1_freighttermscode@OData.Community.Display.V1.FormattedValue": "FOB",
                    "address1_freighttermscode": 1
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "09/01/2025 17:09",
                    "createdon": "2025-01-09T20:09:27Z",
                    "auditid": "5545de8e-24a1-4f0f-843b-1ca2e4bed624",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "45,39,6"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "donotpostalmail@OData.Community.Display.V1.FormattedValue": "Permitir",
                    "donotpostalmail": false,
                    "donotfax@OData.Community.Display.V1.FormattedValue": "Permitir",
                    "donotfax": false,
                    "preferredcontactmethodcode@OData.Community.Display.V1.FormattedValue": "Qualquer uma",
                    "preferredcontactmethodcode": 1
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "donotpostalmail@OData.Community.Display.V1.FormattedValue": "N\u00e3o Permitir",
                    "donotpostalmail": true,
                    "donotfax@OData.Community.Display.V1.FormattedValue": "N\u00e3o Permitir",
                    "donotfax": true,
                    "preferredcontactmethodcode@OData.Community.Display.V1.FormattedValue": "Telefone",
                    "preferredcontactmethodcode": 3
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "09/01/2025 16:03",
                    "createdon": "2025-01-09T19:03:24Z",
                    "auditid": "b1de6bbf-bdbd-4632-9fa0-fd0971f4cadf",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "20"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "_primarycontactid_value@OData.Community.Display.V1.FormattedValue": "de tal, Fulano",
                    "_primarycontactid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "primarycontactid",
                    "_primarycontactid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "contact",
                    "_primarycontactid_value": "6afb0554-bcce-ef11-a72e-002248e01543"
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "09/01/2025 15:42",
                    "createdon": "2025-01-09T18:42:45Z",
                    "auditid": "8f16b52b-bf81-43d2-9008-34b8ac8da9ec",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "48,183"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "creditlimit": 2000.0000000000,
                    "creditlimit_base": 2000.0000000000
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "creditlimit": 2500.5,
                    "creditlimit_base": 2500.5
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "09/01/2025 15:42",
                    "createdon": "2025-01-09T18:42:08Z",
                    "auditid": "36344417-5d17-45d3-92f2-133c44f10906",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "48,183"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "creditlimit": 2000,
                    "creditlimit_base": 2000
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "09/01/2025 15:39",
                    "createdon": "2025-01-09T18:39:55Z",
                    "auditid": "4e80ceaf-6981-4896-af37-158e1c4c74c2",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "41,28,27,9"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "donotemail@OData.Community.Display.V1.FormattedValue": "Permitir",
                    "donotemail": false
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "ownershipcode@OData.Community.Display.V1.FormattedValue": "P\u00fablica",
                    "ownershipcode": 1,
                    "donotemail@OData.Community.Display.V1.FormattedValue": "N\u00e3o Permitir",
                    "donotemail": true,
                    "sic": "1234",
                    "industrycode@OData.Community.Display.V1.FormattedValue": "Seguros",
                    "industrycode": 20
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "09/01/2025 15:27",
                    "createdon": "2025-01-09T18:27:42Z",
                    "auditid": "9b9ecb28-ec76-4834-bb1e-1dc17dda599e",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "78,79,214"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "address1_composite": "Rua Coimbra 359\r\nRua Coimbra 359\r\nRua Coimbra 359\r\nNova Igua\u00e7u - Rio de Janeiro\r\nBrasil\r\n26291224",
                    "address1_line2": "Rua Coimbra 359",
                    "address1_line3": "Rua Coimbra 359"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "address1_composite": "Rua Coimbra 359\r\nNova Igua\u00e7u - Rio de Janeiro\r\nBrasil\r\n26291224"
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "09/01/2025 15:27",
                    "createdon": "2025-01-09T18:27:08Z",
                    "auditid": "336b69ca-ee18-4cf3-b2d2-143f852ecd01",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "43,33,57"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "fax": "1212321"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "websiteurl": "https://www.google.com",
                    "fax": "121232123131",
                    "_parentaccountid_value@OData.Community.Display.V1.FormattedValue": "teste conta",
                    "_parentaccountid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "parentaccountid",
                    "_parentaccountid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
                    "_parentaccountid_value": "2f972951-b7ce-ef11-a72e-002248e01543"
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "08/01/2025 11:17",
                    "createdon": "2025-01-08T14:17:54Z",
                    "auditid": "021b59ea-f9bd-42bc-9ff6-156935d8881a",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "59,61"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Inativa",
                    "statuscode": 2,
                    "statecode@OData.Community.Display.V1.FormattedValue": "Inativa",
                    "statecode": 1
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Ativa",
                    "statuscode": 1,
                    "statecode@OData.Community.Display.V1.FormattedValue": "Ativa",
                    "statecode": 0
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "08/01/2025 11:17",
                    "createdon": "2025-01-08T14:17:12Z",
                    "auditid": "d6875bff-559c-4b68-a9ac-8a72e3ac6ee0",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "59,61"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Ativa",
                    "statuscode": 1,
                    "statecode@OData.Community.Display.V1.FormattedValue": "Ativa",
                    "statecode": 0
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Inativa",
                    "statuscode": 2,
                    "statecode@OData.Community.Display.V1.FormattedValue": "Inativa",
                    "statecode": 1
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "07/01/2025 15:58",
                    "createdon": "2025-01-07T18:58:30Z",
                    "auditid": "daedb3fc-9ade-42b3-80c5-45c3e62cefd7",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "22"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "name": "Teste 2"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "name": "Teste 3"
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "19/12/2024 14:43",
                    "createdon": "2024-12-19T17:43:36Z",
                    "auditid": "269e84c0-f4a6-4627-a8af-35431a163e3d",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "22"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "name": "Teste"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "name": "Teste 2"
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "19/12/2024 11:12",
                    "createdon": "2024-12-19T14:12:14Z",
                    "auditid": "3ff8c038-80d6-4dc9-8f96-a4493a2b9e29",



                    "action@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "action": 2,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "78,79,77,80,81,40,85,43,83,214"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "address1_city": "Nova Igua\u00e7u",
                    "address1_composite": "Rua Coimbra 359\r\nRua Coimbra 359\r\nRua Coimbra 359\r\nNova Igua\u00e7u - Rio de Janeiro\r\nBrasil\r\n26291224",
                    "address1_postalcode": "26291224",
                    "address1_country": "Brasil",
                    "address1_line2": "Rua Coimbra 359",
                    "fax": "1212321",
                    "address1_line1": "Rua Coimbra 359",
                    "address1_line3": "Rua Coimbra 359",
                    "address1_stateorprovince": "Rio de Janeiro",
                    "telephone1": "21982624600"
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Criar",
                    "operation": 1,
                    "createdon@OData.Community.Display.V1.FormattedValue": "18/12/2024 10:14",
                    "createdon": "2024-12-18T13:14:06Z",
                    "auditid": "96ecdd23-385e-45a5-8d93-e160c9fb7ae1",



                    "action@OData.Community.Display.V1.FormattedValue": "Criar",
                    "action": 1,





                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "attributemask": "10,59,115,244,46,160,13,45,123,47,22,41,97,38,182,61,6,39,159,5,247,8,19,211,49,21,11,110,177"
                },
                "OldValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account"
                },
                "NewValue": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.account",
                    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
                    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_ownerid_value": "8be282dd-4634-ef11-a316-6045bd3928d8",
                    "merged@OData.Community.Display.V1.FormattedValue": "N\u00e3o",
                    "merged": false,
                    "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue": "Real",
                    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "transactioncurrencyid",
                    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "transactioncurrency",
                    "_transactioncurrencyid_value": "2c2c6a70-7a34-ef11-a316-6045bd3928d8",
                    "participatesinworkflow@OData.Community.Display.V1.FormattedValue": "N\u00e3o",
                    "participatesinworkflow": false,
                    "followemail@OData.Community.Display.V1.FormattedValue": "Permitir",
                    "followemail": true,
                    "processid": "00000000-0000-0000-0000-000000000000",
                    "address2_shippingmethodcode@OData.Community.Display.V1.FormattedValue": "Valor Padr\u00e3o",
                    "address2_shippingmethodcode": 1,
                    "accountratingcode@OData.Community.Display.V1.FormattedValue": "Valor Padr\u00e3o",
                    "accountratingcode": 1,
                    "creditonhold@OData.Community.Display.V1.FormattedValue": "N\u00e3o",
                    "creditonhold": false,
                    "donotphone@OData.Community.Display.V1.FormattedValue": "Permitir",
                    "donotphone": false,
                    "donotemail@OData.Community.Display.V1.FormattedValue": "Permitir",
                    "donotemail": false,
                    "donotsendmm@OData.Community.Display.V1.FormattedValue": "Enviar",
                    "donotsendmm": false,
                    "marketingonly@OData.Community.Display.V1.FormattedValue": "N\u00e3o",
                    "marketingonly": false,
                    "territorycode@OData.Community.Display.V1.FormattedValue": "Valor Padr\u00e3o",
                    "territorycode": 1,
                    "accountclassificationcode@OData.Community.Display.V1.FormattedValue": "Valor Padr\u00e3o",
                    "accountclassificationcode": 1,
                    "donotpostalmail@OData.Community.Display.V1.FormattedValue": "Permitir",
                    "donotpostalmail": false,
                    "statuscode@OData.Community.Display.V1.FormattedValue": "Ativa",
                    "statuscode": 1,
                    "shippingmethodcode@OData.Community.Display.V1.FormattedValue": "Valor Padr\u00e3o",
                    "shippingmethodcode": 1,
                    "donotbulkemail@OData.Community.Display.V1.FormattedValue": "Permitir",
                    "donotbulkemail": false,
                    "address2_freighttermscode@OData.Community.Display.V1.FormattedValue": "Valor Padr\u00e3o",
                    "address2_freighttermscode": 1,
                    "name": "Teste",
                    "statecode@OData.Community.Display.V1.FormattedValue": "Ativa",
                    "statecode": 0,
                    "customersizecode@OData.Community.Display.V1.FormattedValue": "Valor Padr\u00e3o",
                    "customersizecode": 1,
                    "exchangerate@OData.Community.Display.V1.FormattedValue": "1,000000000000",
                    "exchangerate": 1.000000000000,
                    "donotbulkpostalmail@OData.Community.Display.V1.FormattedValue": "N\u00e3o",
                    "donotbulkpostalmail": false,
                    "donotfax@OData.Community.Display.V1.FormattedValue": "Permitir",
                    "donotfax": false,
                    "businesstypecode@OData.Community.Display.V1.FormattedValue": "Valor Padr\u00e3o",
                    "businesstypecode": 1,
                    "address2_addresstypecode@OData.Community.Display.V1.FormattedValue": "Valor Padr\u00e3o",
                    "address2_addresstypecode": 1,
                    "preferredcontactmethodcode@OData.Community.Display.V1.FormattedValue": "Qualquer uma",
                    "preferredcontactmethodcode": 1
                }
            },
            {
                "AuditRecord": {
                    "@odata.type": "#Microsoft.Dynamics.CRM.audit",
                    "operation@OData.Community.Display.V1.FormattedValue": "Atualizar",
                    "operation": 2,
                    "createdon@OData.Community.Display.V1.FormattedValue": "18/12/2024 10:12",
                    "createdon": "2024-12-18T13:12:54Z",
                    "auditid": "e0152381-2956-4dbe-b1fc-2f2b3057ddea",
                    "action@OData.Community.Display.V1.FormattedValue": "Auditoria de Entidade Iniciada",
                    "action": 105,
                    "_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
                    "_userid_value@OData.Community.Display.V1.FormattedValue": "Rodrigo Lima",
                    "_userid_value": "8be282dd-4634-ef11-a316-6045bd3928d8"
                }
            }
        ]
    }
}

