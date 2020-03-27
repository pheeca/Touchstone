
let schemahelper = require('../../../framework/schemahelper');
let SchemaExtractor = require('../../../framework/schemaextractor');

class Internal {

    constructor(_this,schema) {
        this.obj = _this;
        this.schema = schema;
        this.extract = new SchemaExtractor(schema);
    }
    async  CreateUpdateApp(params) {
        console.log(params)
    }
      
}
module.exports = async function (params) {
    let schema = schemahelper.readSchema(params.src);
    let internal = new Internal(this,schema);
    let result = await internal.CreateUpdateApp(params)
    return result;

}