
let schemahelper = require('../../../framework/schemahelper');
class Internal {

    constructor(_this) {
        this.obj = _this;
    }
    async  CreateUpdateDB(params,schema) {
        let query = `SELECT  c.TABLE_NAME,c.COLUMN_NAME,c.ORDINAL_POSITION,c.IS_NULLABLE,c.DATA_TYPE,
    c.NUMERIC_PRECISION,c.NUMERIC_PRECISION_RADIX,c.NUMERIC_SCALE,
    CHARACTER_MAXIMUM_LENGTH,CHARACTER_OCTET_LENGTH,NUMERIC_SCALE,DATETIME_PRECISION,COLUMN_DEFAULT
     FROM INFORMATION_SCHEMA.COLUMNS c`;

        //let data = await this.obj.getData(params.db, query);
        return [];
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
    let internal = new Internal(this);
    let schema = schemahelper.readSchema(params.src);
    let result = await internal.CreateUpdateDB(params,schema)
    return result;

}