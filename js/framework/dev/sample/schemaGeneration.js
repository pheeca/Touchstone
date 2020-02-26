
const uuidV4 = require('uuid/v4');
const path = require('path');
const fs = require('fs');

var mssql = require("../../database/ms-sql");
var sql = require('mssql');

module.exports = {
  
    uuidv4() {
        return uuidV4();
    },
    getdata(){
        return JSON.parse(fs.readFileSync(path.join(__dirname, 'storage/schema.json'), 'utf8'));
    },
    
    async getDatabase(query,params){
        let result = null;
        try {
            let sqlConfig = new mssql().getConnectionConfig("Server=PHEECA\\SQLEXPRESS2016;Database=EROB;User id=sa;password=password1");
            //let pool =  sql.connect(sqlConfig);
            const pool = new sql.ConnectionPool(sqlConfig);
            var connect = pool.connect();
            await connect;
            result = await pool.request()
                .query(query);
            result=   result.recordsets.reduce((a,b)=>a.concat(b));
            //console.log("recordsets",result.recordsets);
            //console.log("recordset",result.recordset);
            sql.close()
        } catch (error) {
            console.error(error);
            sql.close();
        }
        return result;
    },
     async getProps(params){
        let query =`SELECT  t.TABLE_NAME,c.COLUMN_NAME,c.ORDINAL_POSITION,c.IS_NULLABLE,c.DATA_TYPE,
        c.NUMERIC_PRECISION,c.NUMERIC_PRECISION_RADIX,c.NUMERIC_SCALE
         FROM INFORMATION_SCHEMA.TABLES t
         INNER JOIN INFORMATION_SCHEMA.COLUMNS c on c.TABLE_NAME=t.TABLE_NAME
        WHERE 
        c.TABLE_NAME=t.TABLE_NAME and
        t.TABLE_TYPE='BASE TABLE' and t.TABLE_CATALOG='EROB'
        and (c.NUMERIC_PRECISION is not null
            AND NOT (c.NUMERIC_PRECISION=10 AND c.NUMERIC_PRECISION_RADIX=10)
            )`;
            /*
| DATA_TYPE | NUMERIC_PRECISION_RADIX | NUMERIC_PRECISION | NUMERIC_SCALE |
|-----------|-------------------------|-------------------|---------------|
|       int |                      10 |                10 |             0 |
|     float |                       2 |                53 |        (null) |
|     money |                      10 |                19 |             4 |
|   decimal |                      10 |                12 |            10 |
|      real |                       2 |                24 |        (null) |
            */
           let data = await module.exports.getDatabase(query,params);
           return data;
    },
    async getEntities(params){
       let query =`SELECT  t.TABLE_NAME
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
          let data = await module.exports.getDatabase(query,params);
          return data;
   },
   async getEntities(params){
      let query =`SELECT  t.TABLE_NAME
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
         let data = await module.exports.getDatabase(query,params);
         return data;
  },
  async getEntitiesAsSchema(params){
      let entityObj = await module.exports.getEntities(params);
      //.toArray().map((o)=>({TABLE_NAME:o.TABLE_NAME}));
      let schema = entityObj.map((o)=>
      ({
        "UUID": module.exports.uuidv4(),
        "Module": "c97a8073-80f5-45e4-b0d4-5186259c703e",
        "IsVirtual": false,
        "CustomSQL": null,
        "Name": o.TABLE_NAME,
        "Notes": null,
        "IsEnumeratedType": false,
        "EnumeratedValues": {},
        "IsAuditEnabled": null,
        "IsTenantEnabled": null,
        "Columns":[]}
        ));
    return schema;
  }
}  



