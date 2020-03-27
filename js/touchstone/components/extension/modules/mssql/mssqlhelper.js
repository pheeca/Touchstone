
var sql = require('mssql');

module.exports = {

    getDBConfig: function (connectionstring) {
        let config = {
            user: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('user id=') > -1).map(e => e.replace(new RegExp('user id=', "ig"), ''))[0],
            password: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('password=') > -1).map(e => e.replace(new RegExp('password=', "ig"), ''))[0],
            server: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('server=') > -1).map(e => e.replace(new RegExp('server=', "ig"), ''))[0],
            database: connectionstring.split(';').filter(e => e.toLowerCase().indexOf('database=') > -1).map(e => e.replace(new RegExp('database=', "ig"), ''))[0],
            /* driver: "msnodesqlv8",
             options: {
               trustedConnection: true
             }*/
        };
        config.connectionstring = () => `user id=${config.user};password=${config.password};server=${config.server};database=${config.database};`
        return config;
    },
     getData: async function(connectionstring, query, resultRaw = false) {
        var sqlConfig = module.exports.getDBConfig(connectionstring);
        let result = null;
        try {
            const pool = new sql.ConnectionPool(sqlConfig);
            var connect = pool.connect();
            await connect;
            result = await pool.request()
                .query(query);
            if (!resultRaw) {
                result = result.recordsets.reduce((a, b) => a.concat(b),[]);

            }
            //console.log("recordsets",result.recordsets);
            //console.log("recordset",result.recordset);
            sql.close()
        } catch (error) {
            console.error(error);
            sql.close();
        }
        return result;
    }
}