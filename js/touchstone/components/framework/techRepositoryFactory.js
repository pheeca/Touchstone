let stackregistry = require('./../extension/stackregistry');
let technologyMapper = require('./../../engine/extension/technologyMapper');
let schemahelper = require('./../framework/schemahelper');
let schemaextractor = require('./../framework/schemaextractor');
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
     getBackendRepository(modelSrc){
        let stack = stackregistry();
        let model = schemahelper.readSchema(modelSrc);
        let _backendStack=new schemaextractor(model).getBackendStack();
        let repository= stack.filter( stk=>
          technologyMapper.Stacks.map(s=>s.Name).indexOf(stk.tech)>-1
          && stk.tech==_backendStack
          )[0]||null;
        if(!repository){
          return null;
        }
        return new repository();
    }
    
  }
module.exports =TechRepositoryFactory;