let schemaHelper = require('../shared/schemaHelper');
var fs = require('fs');
var csharpParser = require('./csharpParser');

module.exports = function (schema) {
    let _schema = schema;
    this.GenerateEntities = function () {
        let transformedSchema =this.transformSchema();
        for (let i = 0; i < transformedSchema.Model.Modules.length; i++) {
            let module = transformedSchema.Model.Modules[i];
            let path = module.Path+"\\Models\\ModelCore";
            let files=fs.readdirSync(path).map(e=>path+"\\"+e);
            files.forEach((f)=>{
                fs.unlinkSync(f);
            });
        }
        for (let i = 0; i < transformedSchema.Model.DBModels.length; i++) {
            let dbModel = transformedSchema.Model.DBModels[i];
            var module=transformedSchema.Model.Modules.filter(mod=>mod.UUID==dbModel.Module)[0];

            let options = schemaHelper.getCurrentUserOptions(_schema);
            let columns = dbModel.Columns;
            if(dbModel.IsAuditEnabled){
                columns = columns.concat(transformedSchema.Model.AuditColumns);
            }
            
            if(transformedSchema.options.MultiTenancy.IsEnabled){
                columns = columns.concat(transformedSchema.Model.TenantColumns);
            }
            
            let data = `using DatabaseTVP_Core;
using System; 
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
            
namespace ${options.ProjectName}.Areas.${module.Name}.Models
{
    public partial class ${dbModel.Name}
    {
            ${columns.map(c=>`[TVP]\r\n            public ${c.Type=='Model'?'int':c.Type} ${c.Name} { get; set; }`).join('\r\n            ')}
            public string Module { get { return "${module.Name}"; } }
    }
}`;
           fs.writeFileSync(dbModel.Path,data);
        }
    }
    this.setDatabase = function () {
        var configFile = schemaHelper.getCurrentStartupProjectFullPath(_schema).filter(path => path.indexOf("appsettings.json") > -1)[0];
        if (configFile) {
            let option = schemaHelper.getCurrentUserOptions(_schema);
            let rawconfig = fs.readFileSync(configFile, 'utf8');
            //config=config.split(/\r?\n/).map(line=>line.split('//')[0]).join('\n');
            eval(`config=${rawconfig}`);
            if (option.Database.ConnectionString !== config.ConnectionStrings[option.ProjectName]) {
                config.ConnectionStrings[option.ProjectName] = option.Database.ConnectionString;
            }
            if (option.Database.ConnectionStringLog !== config.ConnectionStrings[option.ProjectName + "_Log"]) {
                config.ConnectionStrings[option.ProjectName + "_Log"] = option.Database.ConnectionStringLog;
            }
            fs.writeFileSync(configFile, JSON.stringify(config, null, 4));
        }
    };

    this.transformSchema = function () {
        this.setModulesPath = function (__areaDirname) {
            let options = schemaHelper.getCurrentUserOptions(_schema);
            let areaPaths = schemaHelper.getDirectory(schemaHelper.getDirectory(options.SolutionStartupFolder, __areaDirname)[0]);
            let transformedSchema = schemaHelper.cloneObject(_schema);
            for (let i = 0; i < transformedSchema.Model.Modules.length; i++) {
                transformedSchema.Model.Modules[i].Path = areaPaths.filter(ap => ap.toLocaleLowerCase().endsWith(transformedSchema.Model.Modules[i].Name.toLocaleLowerCase()))[0] || null;
            }
            return transformedSchema;
        };
        /*this.getModels=function(transformedSchema)
        {
            let models=[];
            for (let i = 0; i < transformedSchema.Model.Modules.length; i++) {
                if (transformedSchema.Model.Modules[i].Path) {
                    let modelFiles =schemaHelper.getDirectory(transformedSchema.Model.Modules[i].Path + `\\Models`).filter(e=>e.endsWith('.cs'));
                    for (let j = 0; j < modelFiles.length; j++) {
                        let modelFile= modelFiles[j];
                        let model = csharpParser.getFileAsDBModel(modelFile,transformedSchema.Model.Modules[i].UUID);
                        models.push(model)
                    }
                }
            }
            fs.writeFileSync('.\a.json', JSON.stringify(models, null, 4));
           return models;
        };*/
        this.setModelPath = function (transformedSchema) {
            for (let j = 0; j < transformedSchema.Model.DBModels.length; j++) {
                let module = transformedSchema.Model.Modules.filter(mod => mod.UUID == transformedSchema.Model.DBModels[j].Module)[0] || null;
                if ((module || {}).Path) {
                    transformedSchema.Model.DBModels[j].Path = module.Path + `\\Models\\ModelCore\\${transformedSchema.Model.DBModels[j].Name}.cs`;
                    if(transformedSchema.Model.DBModels[j].IsAuditEnabled==null)
                    {
                        transformedSchema.Model.DBModels[j].IsAuditEnabled=transformedSchema.options.AuditEnabled;
                    }
                }
            }
            return transformedSchema;
        }
        let transformedSchema = this.setModulesPath('Areas');
        transformedSchema = this.setModelPath(transformedSchema);
        return transformedSchema;
    };

    
    if (_schema) {
    } else {
        console.error("dotnetcore: schema not provided")
    }
}


