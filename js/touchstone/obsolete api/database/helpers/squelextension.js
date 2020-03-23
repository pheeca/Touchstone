
var squel = require("squel");
/*
NOTE: All methods prefixed with '_' are internal and not exposed via the
query builder.
 */
 
class CreateTableBlock extends squel.cls.Block {
    /** The method exposed by the query builder */
    table (name) {
        this._name = name;
    }
   
    /** The method which generates the output */
    _toParamString (options) {
      return {
          text:   this._name,
          values: [],  /* values for paramterized queries */
      };
    }
  }

  class AlterTableBlock extends squel.cls.Block {
    /** The method exposed by the query builder */
    addConstraints (tableName) {
        this._name = tableName;
    }
   
    /** The method which generates the output */
    _toParamString (options) {
      return {
          text:   this._name,
          values: [],  /* values for paramterized queries */
      };
    }
  }
   
  class CreateFieldBlock extends squel.cls.Block {
    constructor (options) {
      super(options);
      this._fields = [];
    }
   
    /** The method exposed by the query builder */
    field (name, type, constraints) {
      this._fields.push({
        name: name, type: type, constraints:constraints
      });
    }
   
    /** The method which generates the output */
    _toParamString (options) {
      let str = this._fields.map((f) => {
        return `${f.name} ${f.type.toUpperCase()}${f.constraints.IsPrimary?' IDENTITY(1,1)':''}${f.constraints.IsNull?'':' NOT NULL'}`;
      }).join(', ');
   
      return {
        text: `(${str})`,
        values: [],   /* values for paramterized queries */
      };
    }
  }
  class CreateFieldConstraintBlock extends squel.cls.Block {
    constructor (options) {
      super(options);
      this._fields = [];
    }
   
    /** The method exposed by the query builder */
    constraint (name, constraints,refmodel) {
      this._fields.push({
        name: name, constraints:constraints, refmodel:refmodel
      });
    }
    _formatConstraint(field){
      let syntax = {
          "IsPrimary" :`primary key ({0})`,
          "IsUnique":`UNIQUE({0})`
      };
      let fieldConstraint =Object.keys(field.constraints).filter(k=>field.constraints[k] && k!='IsNull').map(k=>
        `CONSTRAINT ${field.name}_${k} ${syntax[k].replace("{0}", field.name)}`);
        if(field.refmodel){
          let ffield=field.refmodel.Columns.filter(c=>c.Constraints.IsPrimary)[0];
          fieldConstraint.push(`CONSTRAINT [FK_${field.name}_${ffield.UUID}_${field.refmodel.Name}${ffield.Name}] FOREIGN KEY(${field.name})
          REFERENCES ${field.refmodel.Name} (${ffield.Name})`);
        }
      return fieldConstraint.toLocaleString();
    }
    /** The method which generates the output */
    _toParamString (options) {
      let str = this._fields.map(this._formatConstraint).filter(f=>f).join(', ');
   
      return {
        text: str,
        values: [],   /* values for paramterized queries */
      };
    }
  }
   
  class CreateTableQuery extends squel.cls.QueryBuilder {
    constructor (options, blocks) {
      super(options, blocks || [
        new squel.cls.StringBlock(options, 'CREATE TABLE'),
        new CreateTableBlock(options),
        new CreateFieldBlock(options),
        new squel.cls.StringBlock(options, ';\r\nAlter TABLE'),
        new AlterTableBlock(options),
        new squel.cls.StringBlock(options, 'ADD'), 
        new CreateFieldConstraintBlock(options)
      ]);
    }
  }
   
  
let squelcreate = function(options) {
  return new CreateTableQuery(options);
}
  module.exports = squelcreate;