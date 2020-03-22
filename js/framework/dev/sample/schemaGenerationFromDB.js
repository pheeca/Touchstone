
const uuidV4 = require('uuid/v4');
const path = require('path');
const fs = require('fs');

var mssql = require("../../database/ms-sql");
var sql = require('mssql');

module.exports = {
    async generateSchemaFromDB(params) {
        let schema = await module.exports.getEntitiesAsSchema(params);
         module.exports.saveSchema(params,schema);
        return schema;
    },
    uuidv4() {
        return uuidV4();
    },
    getdata() {
        return JSON.parse(fs.readFileSync('./storage/schema.json', 'utf8'));
    },

    async getDatabase(query, params) {
        let defaultSrc =params.db|| "Server=PHEECA\\SQLEXPRESS2016;Database=EROB;User id=sa;password=password1";
        let result = null;
        try {
            let sqlConfig = new mssql().getConnectionConfig(defaultSrc);
            //let pool =  sql.connect(sqlConfig);
            const pool = new sql.ConnectionPool(sqlConfig);
            var connect = pool.connect();
            await connect;
            result = await pool.request()
                .query(query);
            result = result.recordsets.reduce((a, b) => a.concat(b));
            //console.log("recordsets",result.recordsets);
            //console.log("recordset",result.recordset);
            sql.close()
        } catch (error) {
            console.error(error);
            sql.close();
        }
        return result;
    },
    async getProps(params) {
        let query = `SELECT  c.TABLE_NAME,c.COLUMN_NAME,c.ORDINAL_POSITION,c.IS_NULLABLE,c.DATA_TYPE,
        c.NUMERIC_PRECISION,c.NUMERIC_PRECISION_RADIX,c.NUMERIC_SCALE,
        CHARACTER_MAXIMUM_LENGTH,CHARACTER_OCTET_LENGTH,NUMERIC_SCALE,DATETIME_PRECISION,COLUMN_DEFAULT
         FROM INFORMATION_SCHEMA.COLUMNS c`;/**
             * SELECT  t.TABLE_NAME,c.COLUMN_NAME,c.ORDINAL_POSITION,c.IS_NULLABLE,c.DATA_TYPE,
        c.NUMERIC_PRECISION,c.NUMERIC_PRECISION_RADIX,c.NUMERIC_SCALE
         FROM INFORMATION_SCHEMA.TABLES t
         INNER JOIN INFORMATION_SCHEMA.COLUMNS c on c.TABLE_NAME=t.TABLE_NAME
        WHERE 
        c.TABLE_NAME=t.TABLE_NAME and
        t.TABLE_TYPE='BASE TABLE' and t.TABLE_CATALOG='EROB' and (c.NUMERIC_PRECISION is not null
            AND NOT (c.NUMERIC_PRECISION=10 AND c.NUMERIC_PRECISION_RADIX=10))
             */

        let data = await module.exports.getDatabase(query, params);
        return data;
    }, async getPropsInfo(params) {
        let query = `select tc.CONSTRAINT_TYPE,kcu.TABLE_NAME,kcu.COLUMN_NAME from INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
        inner join INFORMATION_SCHEMA.KEY_COLUMN_USAGE kcu on tc.CONSTRAINT_NAME=kcu.CONSTRAINT_NAME`;
        let data = await module.exports.getDatabase(query, params);
        return data;
    },
    async getEntities(params) {
        let query = `SELECT  t.TABLE_NAME
        FROM INFORMATION_SCHEMA.TABLES t
        
       WHERE 
       t.TABLE_TYPE='BASE TABLE' and t.TABLE_CATALOG='EROB'
      `;
        /*
| DATA_TYPE | NUMERIC_PRECISION_RADIX | NUMERIC_PRECISION | NUMERIC_SCALE |
|-----------|-------------------------|-------------------|---------------|
|       int |                      10 |                10 |             0 |
|     float |                       2 |                53 |        (null) |
|     money |                      10 |                19 |             4 |
|   decimal |                      10 |                12 |            10 |
|      real |                       2 |                24 |        (null) |
        */
        let data = await module.exports.getDatabase(query, params);
        return data;
    },
    async getEntitiesFilled(params) {
        let _props = await module.exports.getProps(params) || [];
        let _propsInfo = await module.exports.getPropsInfo(params) || [];
        let _entities = await module.exports.getEntities(params) || [];

        _entities.forEach((entity) => {
            entity.Props = _props.filter(p => p.TABLE_NAME == entity.TABLE_NAME);
            entity.Props.forEach((prop) => {
                prop.PropInfo = _propsInfo.filter(p => p.TABLE_NAME == entity.TABLE_NAME && p.COLUMN_NAME == prop.COLUMN_NAME);
            });
        });
        return _entities;
    },
    async getEntitiesAsSchema(params) {
        let entityDBArray = await module.exports.getEntitiesFilled(params);
        let moduleId = module.exports.uuidv4();
        let modelId = module.exports.uuidv4();
        let userId = module.exports.uuidv4();
        let schema = entityDBArray.map((o) =>
            ({
                "UUID": module.exports.uuidv4(),
                "Module": moduleId,
                "IsVirtual": false,
                "CustomSQL": null,
                "Name": o.TABLE_NAME,
                "Notes": module.exports.getDesc(o.TABLE_NAME),
                "IsEnumeratedType": false,
                "EnumeratedValues": {},
                "IsAuditEnabled": null,
                "IsTenantEnabled": null,
                "Columns": []
            }
            ));
        schema = schema.map(so => module.exports.parseProperties(so, entityDBArray));
        schema = schema.map(so => module.exports.setPropertiesReferences(so, schema));
        let upperSchema = {
            Model: [{
                UUID:modelId,
                Name:"Default",
                DBModels: schema,
                StoredProc: [],
                ViewDBModels: [],
                AuditColumns: [],
                Modules: [{
                    "UUID": moduleId,
                    "Name": "Default"
                }],
                URM: {
                    User: null,
                    Role: null,
                    Page: null,
                    Menu: null,
                    PagePermission: null
                },
                ModelInformation: {
                    History:[]
                }
            }],
            SchemaInfo:{
                TouchStoneParserVersion:"0.0.1"
            },
            Dev: {
                CurrentUser: userId,
                Users: [
                    {
                        UUID: userId,
                        Name: "DefaultUser",
                        EnvironmentVariables: {
                            Log:{
                                Type:"Database",
                                Source:"Server=PHEECA\\SQLEXPRESS2016;Database=SSpot_Log;User id=sa;password=password1",
                                Logger:"Default"
                            },
                            Model:{},
                            SolutionFolder: "D:\\FAHEEM\\Computer Science\\Commercial Work\\sspotcore\\SSpot_Core",
                            SolutionStartupFolder: "D:\\FAHEEM\\Computer Science\\Commercial Work\\sspotcore\\SSpot_Core\\SSpot_Core"
                        }
                    }
                ]
            },
            options: {
                ProjectName: "Default",
                MultiTenancy: {
                    IsEnabled: false,
                    TenantModel: "b6494691-77c5-4e5b-96d0-454112ec79a8"
                },
                AuditEnabled: true,
                SolutionFolder: "",
                SolutionStartupFolder: "",
                BackEnd: {
                    ServerType: "DOTNETCORE"
                },
                Database: {
                    ServerType: "MSSQL",
                    ConnectionString: "",
                    ConnectionStringLog: ""
                }
            },
        };
        upperSchema.Dev.Users[0].EnvironmentVariables.Model[modelId] ={
            ConnectionString: params.db
        };
        schema = await module.exports.setUpTenantsAudits(upperSchema, params);
        return schema;
    },
    setPropertiesReferences(currentEntity, Allentitities) {
        currentEntity.Columns.forEach((column) => {
            let _fk = column.__.PropInfo.filter(pi => pi.CONSTRAINT_TYPE == 'FOREIGN KEY')[0];
            if (_fk) {
                let refEt = Allentitities.filter(et => et.Columns.filter(etc => etc.Name == _fk.COLUMN_NAME && etc.Constraints.IsPrimary).length > 0)[0];
                if (refEt) {
                    let refEtCol = refEt.Columns.filter(etc => etc.Name == _fk.COLUMN_NAME && etc.Constraints.IsPrimary)[0];
                    var descCols = refEt.Columns.filter(etc => etc.UUID !== refEtCol.UUID && etc.Type == "string")[0] || refEtCol;
                    column.Type = "Model";
                    column.RefType = refEt.UUID;
                    column.RefTypeValue.BindingKey = refEtCol.UUID;
                    column.RefTypeValue.BindingDisplayValue = descCols.UUID;
                    column.RefTypeValue.FilterColumns[column.UUID] = refEtCol.UUID;
                }
            }
            delete column.__;
        });
        return currentEntity;
    }
    , parseProperties(currentEntity, entityDBArray) {
        let entityDB = entityDBArray.filter(eda => currentEntity.Name == eda.TABLE_NAME)[0];
        if (!entityDB) {
            console.error(currentEntity.Name);
        }
        currentEntity.Columns = entityDB.Props.map(p => ({
            "UUID": module.exports.uuidv4(),
            "IsComputed": false,
            "ComputedSQL": null,
            "Name": p.COLUMN_NAME,
            "OverwriteDBName": p.COLUMN_NAME,
            "Notes": module.exports.getDesc(p.COLUMN_NAME),
            "Type": module.exports.getBackendTypeByDBCol(p),
            "RefType": null,
            "RefTypeValue": {
                "BindingKey": null,
                "BindingDisplayValue": null,
                "FilterColumns": {}
            },
            "Constraints": {
                "IsNull": p.IS_NULLABLE == 'YES',
                "IsUnique": p.PropInfo.filter(pi => pi.CONSTRAINT_TYPE == 'PRIMARY KEY').length > 0 ? true : false,
                "IsPrimary": p.PropInfo.filter(pi => pi.CONSTRAINT_TYPE == 'PRIMARY KEY').length > 0 ? true : false,
            },
            "SQLType": module.exports.getDBTypeByDBCol(p),
            "DefaultValue": p.COLUMN_DEFAULT,
            "__": p
        }));
        return currentEntity;
    }
    , getBackendTypeByDBCol(dbColumn) {
        /*
  | DATA_TYPE | NUMERIC_PRECISION_RADIX | NUMERIC_PRECISION | NUMERIC_SCALE |
  |-----------|-------------------------|-------------------|---------------|
  |       int |                      10 |                10 |             0 |
  |     float |                       2 |                53 |        (null) |
  |     money |                      10 |                19 |             4 |
  |   decimal |                      10 |                12 |            10 |
  |      real |                       2 |                24 |        (null) |
              */
        switch (dbColumn.DATA_TYPE) {
            case 'bit':
                return 'bool'
                break;
            case 'date':
                return 'Date'
                break;
            case 'datetime':
                return 'DateTime'
                break;
            case 'datetime2':
                return 'DateTime'//this needs verification
                break;
            case 'int':
                return 'int'
                break;
            case 'decimal':
                return 'decimal'
                break;
            case 'nchar':
                return 'string'
                break;
            case 'nvarchar':
                return 'string'
                break;
        }
        return 'UnKnownType'
    },
    getDBTypeByDBCol(dbColumn) {
        switch (dbColumn.DATA_TYPE) {
            case 'bit':
                return 'bit'
                break;
            case 'date':
                return 'date'
                break;
            case 'datetime':
                return 'datetime'
                break;
            case 'datetime2':
                return `datetime2(${dbColumn.DATETIME_PRECISION})`;
                break;
            case 'int':
                return 'int'
                break;
            case 'decimal':
                return 'decimal'
                break;
            case 'nchar':
                return `nchar(${dbColumn.CHARACTER_MAXIMUM_LENGTH})`;
                break;
            case 'nvarchar':
                let num = dbColumn.CHARACTER_MAXIMUM_LENGTH > -1 ? dbColumn.CHARACTER_MAXIMUM_LENGTH : 'MAX';
                return `nvarchar(${num})`;
                break;
        }
        return 'UnKnownType'
    }, getDesc(Text) {
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
    },
    async setUpTenantsAudits(upperSchema, params) {
        let query = `SELECT  c.COLUMN_NAME,c.DATA_TYPE,((100.0/(SELECT sum(1.0)
        FROM INFORMATION_SCHEMA.TABLES t))*count(1)) CountPc
        FROM INFORMATION_SCHEMA.COLUMNS c
        group by c.COLUMN_NAME,c.DATA_TYPE
       order by CountPc desc`;
        let data = await module.exports.getDatabase(query, params);
        data.forEach((d, i) => {
            let nextCountPc = i < data.length - 1 ? data[i + 1].CountPc : d.CountPc;
            d.Diff = d.CountPc - nextCountPc;
        });
        let maxDistance = data.map(d => d.Diff).reduce((a, b) => a < b ? b : a, 0);
        let tenantColumns = [];
        for (let index = 0; index < data.length; index++) {
            const d = data[index];
            tenantColumns.push(d);
            if (d.Diff == maxDistance) {
                break;
            }
        }
        let soCol = [];
        upperSchema.Model.forEach(m=>
            m.DBModels.forEach((so => {
                soCol = so.Columns.filter(c => tenantColumns.map(tc => tc.COLUMN_NAME).indexOf(c.Name) > -1);
                if (soCol.length == tenantColumns.length && tenantColumns.length > 0) {
                    so.IsAuditEnabled = true;
                    so.Columns = so.Columns.filter(c => soCol.map(sc => sc.UUID).indexOf(c.UUID) == -1);
                }
            }))
        );
        upperSchema.Model.AuditColumns = soCol;
        return upperSchema;
    },
     saveSchema(params,upperSchema) {
       let src = params.src||'storage/test.json';
       fs.writeFileSync( src, JSON.stringify(upperSchema,null,4));
    }
}



