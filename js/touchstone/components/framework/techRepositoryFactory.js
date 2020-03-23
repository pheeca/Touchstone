let stackregistry = require('./../extension/stackregistry');
class TechRepositoryFactory {
    constructor() {
   /*   this.speed = 0;
      this.name = name;*/
    }
    getStorageRepositoryByDataSource(source){
        let stack = stackregistry();
        let repository= stack.filter(stk=>stk.isValidDatasource(source))[0]||null;
        return new repository();
    }
    /*run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }*/
  }
module.exports =TechRepositoryFactory;