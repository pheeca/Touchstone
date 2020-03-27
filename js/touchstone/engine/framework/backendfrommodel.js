var techRepositoryFactory = require("../../components/framework/techRepositoryFactory");
module.exports = async function (param) {
    let factory = new techRepositoryFactory();
    let db = await factory.getBackendRepository(param.src);
    if(!db){
        return null;
    }
    return db.backendfrommodel(param);
};
