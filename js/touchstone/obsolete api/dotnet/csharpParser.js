
var fs = require('fs');
let schemaHelper = require('../shared/schemaHelper');

module.exports = {
    getFileProperties: function (modelFile,FilterAudit=true) {
        let modelCode = fs.readFileSync(modelFile, 'utf8');
        modelCode=modelCode.split(`\r\n`).filter(e=>e.indexOf('{ get; set; }')>-1).filter(e=>[' TenantId ',' AppId ',' CreatedBy ',' ModifiedBy ',' ReturnMessage '].every(v=>e.indexOf(v)==-1)||!FilterAudit);
        return modelCode;
    },
    getFilePropertiesAsColumns: function (modelFile,modelName,models) {
        let fileProps = this.getFileProperties(modelFile);
        let props =[];
        for(let i=0;i<fileProps.length;i++){
            let fileprop =fileProps[i].replace('{ get; set; }','').split(' ').map(e=>e.trim()).filter(e=>e &&['public','protected','private'].every(v=>e.toLocaleLowerCase()!==v));
           
            let type =fileprop[0].toLocaleLowerCase();
            const defaultSQLTypes = {
                int:"int",
                string:"nvarchar(100)",
                bool:"bit"
            }
            let name =fileprop[1].toLocaleLowerCase();
            let sqlType = defaultSQLTypes[type];
            let IsUnique = name=='username';
            if(['int','string','bool'].indexOf(type)==-1){
                console.error(type);
                sqlType="int";
            }
            props.push({
                "UUID": schemaHelper.uuidv4(),
                "IsComputed": false,
                "ComputedSQL": null,
                "Name":fileprop[1],
                "OverwriteDBName": null,
                "Notes": null,
                "Type": type,
                "RefType": null,
                "RefTypeValue": {
                    "BindingKey": null,
                    "BindingDisplayValue": null,
                    FilterColumns: {
                    }
                },
                "Constraints":{
                    "IsNull":name.indexOf('id')>-1 && name!==modelName.toLocaleLowerCase()+'id'?false:true,
                    "IsUnique":IsUnique,
                    "IsPrimary":name==modelName.toLocaleLowerCase()+'id'
                },
                SQLType: sqlType,
                DefaultValue: null
            });
        }
       
        return props;
    },
    getFileAsDBModel: function (modelFile,moduleId) {
        let modelName = modelFile.split(`\\Models\\`)[1].replace('.cs','');
        let model={
            UUID:schemaHelper.uuidv4(),
            Module: moduleId,
            IsVirtual: false,
            CustomSQL: null,
            Name: modelName,
            Notes: null,
            IsEnumeratedType: false,
            EnumeratedValues: {},
            IsAuditEnabled: null,
            Columns: this.getFilePropertiesAsColumns(modelFile,modelName)
        };
        return model;
    },getBackendDataTypes(schema){
        let defaultSQLTypes = {
            int:["int","tinyint"],
            decimal:["decimal(18,2)","decimal(18,4)","float"],
            string:["nvarchar(100)","nvarchar(10)","nvarchar(20)","nvarchar(50)","nvarchar(500)","nvarchar(max)","text"],
            bool:["bit"],
            file:["nvarchar(500)"],
            image:["nvarchar(500)"],
            date:["datetime"],
            datetime:["datetime"]
        }
        if(schema){
            schema.Model.DBModels.forEach((m)=>{
                defaultSQLTypes[m.UUID] = ["int"];
            })
        }
        return defaultSQLTypes;
    },getBackendToDBTypes(type,schema){
        let ctypes = this.getBackendDataTypes(schema);
        let sqlType = ctypes[type]||[];
        if(sqlType.length==0){
            sqlType = ["int"]
        }
        return sqlType;
    }

}