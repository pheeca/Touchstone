
var sql = require('mssql');
//import setimmediate from 'setimmediate';
//require("msnodesqlv8");

module.exports = function (schema) {
    if (schema) {

    } else {
        console.error("mssql: schema not provided")
    }

    this.checkConnection = async function (connectionstring) {
        try {
            debugger
            var sqlConfig = this.getConnectionConfig(connectionstring);
            //let pool =  sql.connect(sqlConfig);

            const pool = new sql.ConnectionPool(sqlConfig);
            var connect = pool.connect();
            await connect;
            let result = await pool.request()
                .query('select * from GLog');
            sql.close()
        } catch (error) {
            sql.close();
            return false;
        }
        return true;
    };
    this.getConnectionConfig = function (connectionstring) {
        var sqlConfig = {
            user: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('user id=') > -1).map(e => e.replace(new RegExp('user id=', "ig"), ''))[0],
            password: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('password=') > -1).map(e => e.replace(new RegExp('password=', "ig"), ''))[0],
            server: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('server=') > -1).map(e => e.replace(new RegExp('server=', "ig"), ''))[0],
            database: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('database=') > -1).map(e => e.replace(new RegExp('database=', "ig"), ''))[0],

        };
        return sqlConfig;
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
            request.query("select * from Table_1").then(function (recordSet) {
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
