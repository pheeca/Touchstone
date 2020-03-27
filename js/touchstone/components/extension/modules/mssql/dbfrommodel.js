
let schemahelper = require('../../../framework/schemahelper');
let SchemaExtractor = require('../../../framework/schemaextractor');
let helper = require('./mssqlhelper')
var squelcreate = require("./squelextension");

class Internal {

    constructor(_this,schema) {
        this.obj = _this;
        this.schema = schema;
        this.extract = new SchemaExtractor(schema);
    }
    async  CreateUpdateDB(params) {
        await this.createDB(params);
        await this.createTables(params);
    }
    async createDB(params){
        let cfig = helper.getDBConfig( params.db);
        let query = `IF DB_ID('${cfig.database}') IS NULL
                        CREATE DATABASE ${cfig.database};`;
                        cfig.database='master';
        await helper.getData(cfig.connectionstring(), query, true);
    }
    
    async createTables(params){
        let models = this.extract.getAllModels()
        let query =  models.map(model=>this.getSchemaQueryFromModel(model)).reduce((a,b)=>a+b,'');
        return await helper.getData(params.db, query);
    }
    getSchemaQueryFromModel(model){
        let resolvedDbmodels =model.DBModels.filter(e=>e.Columns.filter(c=>c.RefType).length==0);
        while(resolvedDbmodels.length<model.DBModels.length){
            let newfiltered =model.DBModels.filter(e=>e.Columns.filter(c=>c.RefType)
            .filter(c=>resolvedDbmodels.map(rsd=>rsd.UUID).indexOf(c.RefType)==-1).length==0).filter(f=>resolvedDbmodels.map(rsd=>rsd.UUID).indexOf(f.UUID)==-1)
            resolvedDbmodels = resolvedDbmodels.concat(newfiltered);
        }
        
        return resolvedDbmodels.map(dbm=>this.getSchemaQueryFromModelEntity(dbm,model)).reduce((a,b)=>a+b,'');
    }
    getSchemaQueryFromModelEntity (entity,currentModel) {
        let _columnquery ='';
        let _constraintquery ='';
        let constraintExists = false;
        let cols=entity.Columns;
        if(entity.IsAuditEnabled||this.schema.options.AuditEnabled){
            cols = cols.concat(currentModel.AuditColumns);
        }
        if(entity.IsTenantEnabled||this.schema.options.MultiTenancy.IsEnabled){
            cols=cols.concat(currentModel.TenantColumns);
        }
        cols.forEach(Column => {
            _columnquery +=`[${Column.Name}] ${Column.SQLType} `;
            _columnquery +=`${Column.Constraints.IsPrimary?'IDENTITY(1,1)':''} `;
            _columnquery +=`${Column.Constraints.IsNull?'NULL':'NOT NULL'}, \r\n`;
            if(Column.Constraints.IsNull||Column.Constraints.IsUnique||Column.Constraints.IsPrimary||Column.RefType){
                if(Column.RefType){
                    Column.refmodel = currentModel.DBModels.filter(m=>m.UUID==Column.RefType)[0];
                    constraintExists = true;
                }
            }
            _constraintquery+=this._formatConstraint(Column);
        }); 
        let _query=`CREATE TABLE [${entity.Name}](${_columnquery} ${_constraintquery})  \r\n`;//GO\r\n
        return _query;
    }
    _formatConstraint(field){
        let syntax = {
            "IsPrimary" :`primary key ({0})`,
            "IsUnique":`UNIQUE({0})`
        };
        let fieldConstraint =Object.keys(field.Constraints).filter(k=>field.Constraints[k] && k!='IsNull').map(k=>
          `CONSTRAINT [${field.UUID}${field.Name}_${k}] ${syntax[k].replace("{0}", field.Name)}`);
          if(field.refmodel){
            let ffield=field.refmodel.Columns.filter(c=>c.Constraints.IsPrimary)[0];
            let fk =`FK_${field.Name}_${field.UUID}_${field.refmodel.Name}${ffield.Name}`;
            fk = fk.substring(0,Math.min(128,fk.length));
            fieldConstraint.push(`,CONSTRAINT [${fk}] FOREIGN KEY([${field.Name}])
            REFERENCES [${field.refmodel.Name}] ([${ffield.Name}])`);
          }
        return fieldConstraint.toLocaleString();
      }
    getSchemaQueryFromModelOld (entity,currentModel) {
        
        let _query=squelcreate()
        .table(entity.Name);
        let constraintExists = false;
        let cols=entity.Columns;
        if(entity.IsAuditEnabled||this.schema.options.AuditEnabled){
            cols = cols.concat(currentModel.AuditColumns);
        }
        if(entity.IsTenantEnabled||this.schema.options.MultiTenancy.IsEnabled){
            cols=cols.concat(currentModel.TenantColumns);
        }
        cols.forEach(Column => {
            _query= _query.field(Column.Name,Column.SQLType,Column.Constraints);
            if(Column.Constraints.IsNull||Column.Constraints.IsUnique||Column.Constraints.IsPrimary||Column.RefType){
                let refModel=null;
                if(Column.RefType){
                    refModel = currentModel.DBModels.filter(m=>m.UUID==Column.RefType)[0];
                }
                constraintExists = true;
                _query= _query.constraint(Column.Name,Column.Constraints,refModel);
            }
        }); 
        if(constraintExists){
            _query= _query.addConstraints(entity.Name)
        }
        return { Success: true, Message: _query.toString() };
    }
    
        /*
    | DATA_TYPE | NUMERIC_PRECISION_RADIX | NUMERIC_PRECISION | NUMERIC_SCALE |
    |-----------|-------------------------|-------------------|---------------|
    |       int |                      10 |                10 |             0 |
    |     float |                       2 |                53 |        (null) |
    |     money |                      10 |                19 |             4 |
    |   decimal |                      10 |                12 |            10 |
    |      real |                       2 |                24 |        (null) |
        */
      
}
module.exports = async function (params) {
    let schema = schemahelper.readSchema(params.src);
    let internal = new Internal(this,schema);
    let result = await internal.CreateUpdateDB(params)
    return result;

}