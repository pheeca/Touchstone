let stackregistry = require('./../extension/stackregistry');
class TechRepositoryFactory {
    constructor() {
   /*   this.speed = 0;
      this.name = name;*/
    }
    async getStorageRepositoryByDataSource(source){
        let stack = stackregistry();
        
        let repository=  await stack.filter(async stk=>{
          return await stk.isValidDatasource(source);
        })[0]||null;
        if(!repository){
          return null;
        }
        return new repository();
    }
  }
module.exports =TechRepositoryFactory;