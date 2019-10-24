let dotnetcore = require('../dotnet/dotnetcore');
let mssql = require('../database/ms-sql');

function resolveStack(schema) {
    // Code here
    let stack = {};
    stack.backEnd = resolveBackEnd(schema);
    stack.database = resolveDatabase(schema);
    return stack;
}
function resolveBackEnd(schema) {
    return new dotnetcore(schema);
}
function resolveDatabase(schema) {
    return new mssql (schema);
}
module.exports = {
    resolveStack
}