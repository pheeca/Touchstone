let schemaHelper = require('../shared/schemaHelper');

function getUsers(schema) {
    // Code here
    return schema.Dev.Users;
}
function getCurrentUser(schema) {
    // Code here
    return schema.Dev.Users.filter(u=>u.UUID==schema.Dev.CurrentUser)[0]||null;
}
function addUsers(schema,name){
    schema.Dev.Users[schema.Dev.Users.length] = schemaHelper.cloneObject(schema.Dev.Users[schema.Dev.Users.length-1]);
    schema.Dev.Users[schema.Dev.Users.length-1].Name = name;
    schema.Dev.Users[schema.Dev.Users.length-1].UUID = schemaHelper.uuidv4();
    return schema;
}
function setCurrentUser(schema,userUUID){
    schema.Dev.CurrentUser = userUUID;
    return schema;
}

function editUserName(schema,name){
    schema.Dev.Users.forEach(User => {
        if(User.UUID==schema.Dev.CurrentUser){
            User.Name=name;
        }
    });
    return schema;
}
function setConnectionString(schema,ConnectionString){
    schema.Dev.Users.forEach(User => {
        if(User.UUID==schema.Dev.CurrentUser){
            User.EnvironmentVariables.ConnectionString=ConnectionString;
        }
    });
    return schema;
}

function setConnectionStringLog(schema,ConnectionStringLog){
    schema.Dev.Users.forEach(User => {
        if(User.UUID==schema.Dev.CurrentUser){
            User.EnvironmentVariables.ConnectionStringLog=ConnectionStringLog;
        }
    });
    return schema;
}
function setSolutionFolder(schema,SolutionFolder){
    schema.Dev.Users.forEach(User => {
        if(User.UUID==schema.Dev.CurrentUser){
            User.EnvironmentVariables.SolutionFolder=SolutionFolder;
        }
    });
    return schema;
}
function setSolutionStartupFolder(schema,SolutionStartupFolder){
    schema.Dev.Users.forEach(User => {
        if(User.UUID==schema.Dev.CurrentUser){
            User.EnvironmentVariables.SolutionStartupFolder=SolutionStartupFolder;
        }
    });
    return schema;
}

module.exports = {
    getUsers,
    addUsers,
    getCurrentUser,
    setCurrentUser,
    editUserName,
    setConnectionString,
    setConnectionStringLog,
    setSolutionFolder,
    setSolutionStartupFolder
}