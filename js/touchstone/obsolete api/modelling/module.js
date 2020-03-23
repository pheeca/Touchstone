let schemaHelper = require('../shared/schemaHelper');

function addModule(schema,name){
    schema.Model.Modules[schema.Model.Modules.length] = schemaHelper.cloneObject(schema.Model.Modules[schema.Model.Modules.length-1]);
    schema.Model.Modules[schema.Model.Modules.length-1].Name = name;
    schema.Model.Modules[schema.Model.Modules.length-1].UUID = schemaHelper.uuidv4();
    return schema;
}
function refreshModules(schema,modules){
    schema.Model.Modules = modules;
    return schema;
}

module.exports = {
    addModule,
    refreshModules
}