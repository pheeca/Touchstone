var backendfrommodel = require("../modules/webapi/backendfrommodel");
var DefaultRepository = require('./default');

class WebApiRepository extends DefaultRepository {
    static tech =  "WebApi";
    backendfrommodel=backendfrommodel
  }
module.exports = WebApiRepository;

