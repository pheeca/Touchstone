var fs = require('fs');
const uuidV4 = require('uuid/v4');
const touchstoneVersion = '0.0.1'
module.exports = {
    saveSchema: function (params, upperSchema) {
        let src = params.src || `storage/${new Date().toISOString()}.json`;
        fs.writeFileSync(src, JSON.stringify(upperSchema, null, 4));
    },
    uuidv4() {
        return uuidV4();
    },
    readSchema(src) {
        if (!src) {
            console.log('src invalid')
        }
        return JSON.parse(fs.readFileSync(src, 'utf8'));
    },
    getDesc(Text) {
        if (Text) {
            let newText = '';
            for (let t = 0; t < Text.length; t++) {
                if ((Text.charCodeAt(t) < 91 && Text.charCodeAt(t) > 64) && (t == 0 || !(Text.charCodeAt(t - 1) < 91 && Text.charCodeAt(t - 1) > 64))) {
                    newText += ' ';
                }
                newText += Text.charAt(t);
            }
            return newText.trim();
        }
        return Text
    }
    ,getDefaultEntity(obj) {
        return {
            "UUID": obj["UUID"] || this.uuidv4(),
            "Module": obj["Module"] || this.uuidv4(),
            "IsVirtual": obj["IsVirtual"] || false,
            "CustomSQL": obj["CustomSQL"] || null,
            "Name": obj["Name"] || null,
            "Notes": obj["Notes"] || this.getDesc(obj["Name"]) || null,
            "IsEnumeratedType": obj["IsEnumeratedType"] || false,
            "EnumeratedValues": {},
            "IsAuditEnabled": null,
            "IsTenantEnabled": null,
            "Columns": []
        };
    }
    ,getDefaultColumn(obj) {
        let col = {
            "UUID": obj["UUID"] || this.uuidv4(),
            "IsComputed": obj["IsComputed"] || false,
            "ComputedSQL": obj["ComputedSQL"] || null,
            "Name": obj["Name"] || null,
            "OverwriteDBName": obj["OverwriteDBName"] || null,
            "Notes": obj["Notes"] || this.getDesc(obj["Name"]) || null,
            "Type": obj["Type"] || null,
            "RefType": null,
            "RefTypeValue": {
                "BindingKey": null,
                "BindingDisplayValue": null,
                "FilterColumns": {}
            },
            "Constraints": {
                "IsNull": obj["IsNull"] || false,
                "IsUnique": obj["IsUnique"] || false,
                "IsPrimary": obj["IsPrimary"] || false,
            },
            "SQLType": obj["SQLType"] || null,
            "DefaultValue": obj["DefaultValue"] || null,
            "__": obj["__"] || null
        };
        if (col.__ == null) {
            delete col.__;
        }
        return col;
    }
    ,getDefaultSchema(obj) {
        let currentUser =obj["CurrentUser"]||this.getDefaultUser({});
        let col = {
            Model: [{
                UUID: obj["UUID"] || this.uuidv4(),
                Name: obj["Name"] || "Default",
                DBModels: obj["DBModels"] ||[],
                StoredProc: [],
                ViewDBModels: [],
                AuditColumns: [],
                TenantColumns:[],
                Modules: [{
                    "UUID": obj["ModulesUUID"] || this.uuidv4(),
                    "Name": obj["ModulesName"] || "Default"
                }],
                URM: {
                    User: null,
                    Role: null,
                    Page: null,
                    Menu: null,
                    PagePermission: null
                },
                ModelInformation: {
                    History: []
                }
            }],
            SchemaInfo: {
                TouchStoneParserVersion: touchstoneVersion
            },
            Dev: {
                CurrentUser: currentUser.UUID,
                Users: [
                    currentUser
                ]
            },
            options: {
                ProjectName: obj["ProjectName"]||"Default",
                MultiTenancy: {
                    IsEnabled: false,
                    TenantModel: obj["TenantModel"]||null,
                },
                AuditEnabled: true,
                SolutionFolder: "",
                SolutionStartupFolder: "",
                BackEnd: {
                    ServerType: obj["BackEndServerType"]||null,//||"DOTNETCORE"
                },
                Database: {
                    ServerType: obj["DatabaseServerType"]||null,
                    ConnectionString: "",
                    ConnectionStringLog: ""
                }
            },
        };
        return col;
    },getDefaultUser(obj) {
        let userId =this.uuidv4();
        let defaultUser =  {
            UUID: obj["UUID"]||userId,
            Name: obj["Name"]||"DefaultUser",
            EnvironmentVariables: {
                Log: {
                    Type: "Database",
                    Source: "Server=PHEECA\\SQLEXPRESS2016;Database=SSpot_Log;User id=sa;password=password1",
                    Logger: "Default"
                },
                Model: {},
                SolutionFolder: "D:\\FAHEEM\\Computer Science\\Commercial Work\\sspotcore\\SSpot_Core",
                SolutionStartupFolder: "D:\\FAHEEM\\Computer Science\\Commercial Work\\sspotcore\\SSpot_Core\\SSpot_Core"
            }
        };
        return defaultUser;
    }
}