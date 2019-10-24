
var sql = require('mssql');
//require("msnodesqlv8");

module.exports = function(schema){
    if(schema){

    }else{
        console.error("mssql: schema not provided")
    }

    this.checkConnection= async function (connectionstring) {
        try {
            var sqlConfig = this.getConnectionConfig(connectionstring);
                  //let pool =  sql.connect(sqlConfig);
                  
                const pool = new sql.ConnectionPool(sqlConfig);
                var connect =pool.connect();
                await connect;
                 let result =  await pool.request()
                  .query('select * from GLog'); 
                   sql.close()
        } catch (error) {
            sql.close();
            return false;
        }
        return true;
    };
    this.getConnectionConfig= function (connectionstring) {
        var sqlConfig = {
            user: connectionstring.split(';').filter(e=>e.toLowerCase().indexOf('user id=')>-1).map(e=>e.replace(new RegExp('user id=', "ig"),''))[0],
            password: connectionstring.split(';').filter(e=>e.toLowerCase().indexOf('password=')>-1).map(e=>e.replace(new RegExp('password=', "ig"),''))[0],
            server: connectionstring.split(';').filter(e=>e.toLowerCase().indexOf('server=')>-1).map(e=>e.replace(new RegExp('server=', "ig"),''))[0],  
            database: connectionstring.split(';').filter(e=>e.toLowerCase().indexOf('database=')>-1).map(e=>e.replace(new RegExp('database=', "ig"),''))[0],
           
          };
        return sqlConfig;
    };
}
