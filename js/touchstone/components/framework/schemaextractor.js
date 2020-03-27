class SchemaExtractor {

    constructor(_schema) {
        this.schema = _schema;
    }
    getCurrentUser() {
        return this.schema.Dev.Users.filter(e=>e.UUID==this.getCurrentUserId());
    }
    getCurrentUserId() {
        return this.schema.Dev.CurrentUser;
    }
    getAllModels(){
        return this.schema.Model;
    }
    getBackendStack(){
        return this.schema.options.BackEnd.ServerType;
    }

}
module.exports = SchemaExtractor