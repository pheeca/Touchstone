let schemaHelper = require('../shared/schemaHelper');

function getUsers(schema) {
    // Code here
    return schema.Dev.Users;
}
function addUsers(schema,name){
    schema.Dev.Users[schema.Dev.Users.length] = schemaHelper.cloneObject(schema.Dev.Users[schema.Dev.Users.length-1]);
    schema.Dev.Users[schema.Dev.Users.length-1].Name = name;
    schema.Dev.Users[schema.Dev.Users.length-1].UUID = schemaHelper.uuidv4();
    return schema;
}
module.exports = {
    getUsers,
    addUsers
}