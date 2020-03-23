var techRepositoryFactory = require("./../../components/framework/techRepositoryFactory");
module.exports = function (param) {
    let factory = new techRepositoryFactory();
    let db = factory.getStorageRepositoryByDataSource(param.db);
    if(!db){
        return null;
    }
    return db.modelfromdb(param);
};
