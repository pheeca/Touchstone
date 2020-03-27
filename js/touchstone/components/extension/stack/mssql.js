var modelfromdb = require("./../modules/mssql/modelfromdb");
var dbfrommodel = require("./../modules/mssql/dbfrommodel");
var helper = require('./../modules/mssql/mssqlhelper');
var DefaultRepository = require('./default');

class MsSqlRepository extends DefaultRepository {
    static tech =  "MSSQL";
     static async isValidDatasource(source){
        let config = helper.getDBConfig(source);
        config.database = "master";
        let a =await helper.getData(config.connectionstring(),'select cast(1 as bit)[IsValid]');
        return a[0].IsValid;
    }
    modelfromdb=modelfromdb.bind(this);
    dbfrommodel=dbfrommodel.bind(this);
  }
module.exports = MsSqlRepository;

