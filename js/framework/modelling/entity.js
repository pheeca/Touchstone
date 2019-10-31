let schemaHelper = require('../shared/schemaHelper');

function createEntity(schema,name,moduleId){
    schema.Model.DBModels[schema.Model.DBModels.length] = schemaHelper.cloneObject(schema.Model.DBModels[schema.Model.DBModels.length-1]);
    schema.Model.DBModels[schema.Model.DBModels.length-1].Name = name;
    schema.Model.DBModels[schema.Model.DBModels.length-1].UUID = schemaHelper.uuidv4();
    schema.Model.DBModels[schema.Model.DBModels.length-1].Module = moduleId;
    schema.Model.DBModels[schema.Model.DBModels.length-1].Columns = [this.createColumn(schema,name+'Id',null,null,true,null,null,null,null)];
    
    return schema;
}
function createColumn(schema,name,Notes,type,IsPrimary,IsUnique,IsNull,model,displayName){
    IsPrimary=IsPrimary?true:false;
    IsNull=IsNull?(IsPrimary?false:true):false;
    IsUnique=IsUnique?true:(IsPrimary?true:false);
    type =(type||"int").toLowerCase();
    let RefType = null;
    let RefTypeValue = {
        BindingKey: null,
        BindingDisplayValue: null,
        FilterColumns: {}
    };
    if(type=='model'){
        let _model=schema.Model.DBModels.filter(m=>m.UUID==model)[0];
        if(_model){
            RefType = _model.UUID;
            RefTypeValue.BindingKey = _model.Columns.filter(f=>f.Constraints.IsPrimary)[0].UUID;
            RefTypeValue.BindingDisplayValue = _model.Columns.filter(f=>f.UUID==displayName)[0].UUID || RefTypeValue.BindingKey;
            RefTypeValue.FilterColumns[RefType]=RefTypeValue.BindingKey;
        }else{
            throw new Error("No Model exists with UUID:"+model)
        }
    }
    /*else if(type=='collection'){

    }*/

    return {
        "UUID": schemaHelper.uuidv4(),
        "IsComputed": false,
        "ComputedSQL": null,
        "Name": name,
        "OverwriteDBName": null,
        "Notes": Notes,
        "Type": type,
        "RefType": RefType,
        "RefTypeValue": RefTypeValue,
        "Constraints": {
            "IsNull": IsNull,
            "IsUnique": IsUnique,
            "IsPrimary": IsPrimary
        },
        
        "SQLType": type,
        "DefaultValue": null
    };
}

module.exports = {
    createEntity,
    createColumn
}