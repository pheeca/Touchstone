var techRepositoryFactory = require("./../../components/framework/techRepositoryFactory");
module.exports =async function (param) {
    let factory = new techRepositoryFactory();
    let db = await factory.getStorageRepositoryByDataSource(param.db);
    if(!db){
        return null;
    }
    return db.modelfromdb(param);
};
