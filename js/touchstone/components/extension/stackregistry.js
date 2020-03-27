let mssql = require('./stack/mssql');
let webapi = require('./stack/webapi');

module.exports =function()
{
    return [mssql,webapi];

}