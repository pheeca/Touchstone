
var sql = require('mssql');
var schemaHelper = require('./../shared/schemaHelper');
var squel = require("squel").useFlavour('mssql');
var squelcreate = require("./helpers/squelextension");
//import setimmediate from 'setimmediate';
//require("msnodesqlv8");


module.exports = function (schema) {
    if (schema) {

    } else {
        console.error("mssql: schema not provided")
    }

    this.checkConnection = async function (connectionstring) {
        try {
            var sqlConfig = this.getConnectionConfig(connectionstring);
            //let pool =  sql.connect(sqlConfig);
            const pool = new sql.ConnectionPool(sqlConfig);
            var connect = pool.connect();
            await connect;
            let result = await pool.request()
                .query('select 1');
            sql.close()
        } catch (error) {
            sql.close();
            return { Success: false, Message: error.message };
        }
        return { Success: true, Message: null };
    };
    this.getConnectionConfig = function (connectionstring) {
        var sqlConfig = {
            user: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('user id=') > -1).map(e => e.replace(new RegExp('user id=', "ig"), ''))[0],
            password: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('password=') > -1).map(e => e.replace(new RegExp('password=', "ig"), ''))[0],
            server: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('server=') > -1).map(e => e.replace(new RegExp('server=', "ig"), ''))[0],
            database: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('database=') > -1).map(e => e.replace(new RegExp('database=', "ig"), ''))[0],
           /* driver: "msnodesqlv8",
            options: {
              trustedConnection: true
            }*/
        };
        return sqlConfig;
    };
    this.getDataFrom = async function (schema,query,IsLog=false) {
        var sqlCon = IsLog? schemaHelper.getCurrentUserOptions(schema).Database.ConnectionStringLog:schemaHelper.getCurrentUserOptions(schema).Database.ConnectionString;
        let result = null;
        try {
            let sqlConfig = this.getConnectionConfig(sqlCon);
            //let pool =  sql.connect(sqlConfig);
            const pool = new sql.ConnectionPool(sqlConfig);
            var connect = pool.connect();
            console.log(query);
            await connect;
            result = await pool.request()
                .query(query);
            sql.close()
        } catch (error) {
            sql.close();
            return { Success: false, Message: error.message };
        }
        return { Success: true, Message: result };
    };
    
    this.getDataQueryFromModel =  function (model,schema,limit) {
        
        let modelIndex =1;
        let mainModel =model.Name[0].toLowerCase()+modelIndex;
        let _query=squel.select().from(model.Name, mainModel)
        model.Columns.forEach(Column => {
            
            _query= _query.field(mainModel+"."+Column.Name);
            if(Column.RefType){
                modelIndex += 1;
                let refModel = schema.Model.DBModels.filter(m=>m.UUID==Column.RefType)[0];
                let refAlias =refModel.Name[0].toLowerCase()+modelIndex;
                let join = Object.keys(Column.RefTypeValue.FilterColumns).map(e=>({
                    key1:mainModel+"."+model.Columns.filter(c=>c.UUID==e)[0].Name,
                    key2:refAlias+"."+refModel.Columns.filter(c=>c.UUID==Column.RefTypeValue.FilterColumns[e])[0].Name
                })).map(e=>`${e.key1} = ${e.key2}`).join(` AND `);
                let refColDisplay=refModel.Columns.filter(c=>c.UUID==(Column.RefTypeValue.BindingDisplayValue||Column.RefTypeValue.BindingKey))[0].Name;
                if(model.Columns.map(c=>c.Name).indexOf(refColDisplay)>-1){
                    let joinKey =Object.keys(Column.RefTypeValue.FilterColumns).map(e=>model.Columns.filter(c=>c.UUID==e)[0].Name).toLocaleString();
                    _query= _query.field(refAlias+"."+refColDisplay,joinKey+refColDisplay);
                }else{
                    _query= _query.field(refAlias+"."+refColDisplay);
                }
                _query= _query.left_join(refModel.Name, refAlias, join);
            }
        }); 
        if(limit){
            _query = _query.limit(limit);
        }
        /*.field("t1.id")
        .field("t2.name")
        .left_join("table2", "t2", "t1.id = t2.id")
        .group("t1.id")
        .where("t2.name <> 'Mark'")
        .where("t2.name <> 'John'")
        .toString();*/

        return { Success: true, Message: _query.toString() };
    };

    this.getSchemaQueryFromModel =  function (model,schema) {
        
        let _query=squelcreate()
        .table(model.Name);
        let constraintExists = false;
        let cols=model.Columns;
        if(model.IsAuditEnabled||schema.options.AuditEnabled){
            cols=cols.concat(schema.Model.AuditColumns);
        }
        if(model.IsTenantEnabled||schema.options.MultiTenancy.IsEnabled){
            cols=cols.concat(schema.Model.TenantColumns);
        }
        cols.forEach(Column => {
            _query= _query.field(Column.Name,Column.SQLType,Column.Constraints);
            if(Column.Constraints.IsNull||Column.Constraints.IsUnique||Column.Constraints.IsPrimary||Column.RefType){
                let refModel=null;
                if(Column.RefType){
                    refModel = schema.Model.DBModels.filter(m=>m.UUID==Column.RefType)[0];
                }
                constraintExists = true;
                _query= _query.constraint(Column.Name,Column.Constraints,refModel);
            }
        }); 
        if(constraintExists){
            _query= _query.addConstraints(model.Name)
        }
        return { Success: true, Message: _query.toString() };
    };

    this.getSchemaQueryFromModel =  function (model,schema) {
        
        let _query=squelcreate()
        .table(model.Name);
        let constraintExists = false;
        let cols=model.Columns;
        if(model.IsAuditEnabled||schema.options.AuditEnabled){
            cols=cols.concat(schema.Model.AuditColumns);
        }
        if(model.IsTenantEnabled||schema.options.MultiTenancy.IsEnabled){
            cols=cols.concat(schema.Model.TenantColumns);
        }
        cols.forEach(Column => {
            _query= _query.field(Column.Name,Column.SQLType,Column.Constraints);
            if(Column.Constraints.IsNull||Column.Constraints.IsUnique||Column.Constraints.IsPrimary||Column.RefType){
                let refModel=null;
                if(Column.RefType){
                    refModel = schema.Model.DBModels.filter(m=>m.UUID==Column.RefType)[0];
                }
                constraintExists = true;
                _query= _query.constraint(Column.Name,Column.Constraints,refModel);
            }
        }); 
        if(constraintExists){
            _query= _query.addConstraints(model.Name)
        }
        return { Success: true, Message: _query.toString() };
    };


    this.Test= function()
    {
        var config = {
            server: 'PHEECA\\SQLEXPRESS2017',
            database: 'test',
            user: 'sa',
            password: 'p@ssword1',
            port: '1433'
        };
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function () {
            var request = new sql.Request(conn);
            request.query("select 1").then(function (recordSet) {
                console.log(recordSet);
                conn.close();
            }).catch(function (err) {
                console.log(err);
                conn.close();
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
}
