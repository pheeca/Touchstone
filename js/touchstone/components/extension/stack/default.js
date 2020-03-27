class DefaultRepository {
    static tech =  "UnKnown";

    constructor() {
    }
   
     static async isValidDatasource(source){
        return false;
    }

    test(){
        console.log('testing!');
    }
    
    modelfromdb=()=>{};
    dbfrommodel=()=>{};
  }
module.exports = DefaultRepository;

