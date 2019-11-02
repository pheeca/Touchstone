
setupdbEntities = function () {
  let panel1 = `<div class="contentsplit contentsplit-2 slimScroll">
	${getDbModelListPanel()}
    </div>`;
  let panel2 = `<div class="contentsplit contentsplit-3 slimScroll">
	${getDbModelDesignerPanel()}
    </div>`;

  let panel3 = `<div class="contentsplit contentsplit-5 slimScroll">
	${getDbModelDesignerPanel2()}
    </div>`;
  $(`.content`).html(`<div id="dbentities" class="products" style="max-height: 500px; overflow-y: hidden;">${panel1 + panel2 + panel3}</div>`);
  var element = document.querySelectorAll('.slimScroll');
  var one = [new slimScroll(element[0], {
    'wrapperClass': 'scroll-wrapper unselectable mac',
    'scrollBarContainerClass': 'scrollBarContainer',
    'scrollBarContainerSpecialClass': 'animate',
    'scrollBarClass': 'scroll',
    'keepFocus': true
  }), new slimScroll(element[1], {
    'wrapperClass': 'scroll-wrapper unselectable mac',
    'scrollBarContainerClass': 'scrollBarContainer',
    'scrollBarContainerSpecialClass': 'animate',
    'scrollBarClass': 'scroll',
    'keepFocus': true
  }), new slimScroll(element[2], {
    'wrapperClass': 'scroll-wrapper unselectable mac',
    'scrollBarContainerClass': 'scrollBarContainer',
    'scrollBarContainerSpecialClass': 'animate',
    'scrollBarClass': 'scroll',
    'keepFocus': true
  })];

  $("#dbentities").resizable({
    handles: 's',
    stop: function (event, ui) {
      $(this).css("width", '');
    }
  });
}

function getDbModelListPanel() {
  let array = schema.Model.Modules.map(_m => ({
    Name: _m.Name,
    Models: schema.Model.DBModels.filter(e => _m.UUID == e.Module).filter(f => f.Name.indexOf($('#filter').val() || '') > -1).map(e => ({
      UUID: e.UUID,
      Name: e.Name
    }))
  })).filter(f => f.Models.length);
  let html = `<input id="filter" value="${$('#filter').val() || ''}" /><button>+ Add</button>`;
  if (array.length > 0) {
    array.forEach(obj => {
      let a = obj.Models.filter(f => f.UUID == screen.setupdbEntity);
      a = [];
      html += `<li><span class="caret ${a.length > 0 ? 'caret-down' : ''}">${obj.Name}</span>
                <ul class="nested ${a.length > 0 ? 'active' : ''}" data-info=${JSON.stringify(obj)}>
                ${obj.Models.map(m => `<li data-info=${m.UUID} >${m.Name}</li>`).reduce((a, b) => a + b, '')}
                </ul>
            </li>`;
    });
  }
  $(`.content`).off('click', `#dbentities #myUL .caret`);
  $(`.content`).on('click', `#dbentities #myUL .caret`, function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
  $(`.content`).on('click', `#dbentities #myUL .nested li`, function () {
    screen.setupdbEntity = $(this).data('info');
    screen.Column = null;
    setupdbEntities();
    $(`#dbentities #myUL .nested`).toArray().filter(r => JSON.stringify($(r).data('info')) == JSON.stringify($(this).parent().data('info')))[0].classList.toggle("active");
  });
  $(`.content`).off('change', `#dbentities #filter`)
  $(`.content`).on('change', `#dbentities #filter`, setupdbEntities);
  html += `<div id="dialogEntity" title="Add New Entity" style="display:none;">
    <p></p>
    <input  id="entityname" />
    <select id="entitymodule">${schema.Model.Modules.map(_m => `<option value="${_m.UUID}">${_m.Name}</option>`).reduce((a, b) => a + b, '')}
    </select>
    <button>Create</button>
  </div>`;
  $(`.content`).off('click', '#dbentities #myUL *');

  $(`.content`).on('click', '#dbentities #myUL button', function (e) {
    $("#dialogEntity").dialog();
    $("#dialogEntity button").on('click', function () {
      schema = Entity.createEntity(schema, $('#entityname').val(), $('#entitymodule').val());
      saveSchema();
      $('[aria-describedby="dialogEntity"]').hide();
      $('#entityname').val('');
      setupdbEntities();
    });
  });
  return `<ul style="width: 100%;text-align: left;" id="myUL">${html}</ul><style>ul, #myUL {
        list-style-type: none;
      }
      
      #myUL {
        margin: 0;
        padding: 0;
      }
      
      .caret {
        cursor: pointer;
        -webkit-user-select: none; /* Safari 3.1+ */
        -moz-user-select: none; /* Firefox 2+ */
        -ms-user-select: none; /* IE 10+ */
        user-select: none;
      }
      
      .caret:before {
        content: "\\25B6";
        color: black;
        display: inline-block;
        margin-right: 6px;
      }
      
      .caret-down:before {
        -ms-transform: rotate(90deg); /* IE 9 */
        -webkit-transform: rotate(90deg); /* Safari */'
        transform: rotate(90deg);  
      }
      
      .nested {
        display: none;
      }
      
      .active {
        display: block;
      }</style>`;
}



function getDbModelDesignerPanel() {
  let DBModel = schema.Model.DBModels.filter(e => e.UUID == screen.setupdbEntity)[0];
  let html = '';
  if (DBModel) {
    html += `<h3>${DBModel.Name}</h3><button>+ add column</button>`;
    html += `<ul>${DBModel.Columns.map(c => `<li data-column="${c.UUID}">${c.Name}  -  ${c.Type}</li>`).reduce((a, b) => a + b, '')}</ul>`;
    html += `<div id="dialogColumn" title="Basic dialog" style="display:none;">
  <p></p>
  <input  id="columnname" />
  <button>Create</button>
</div>`;
    $(`.content`).off('click', '#dp h3');
    $(`.content`).on('click', '#dp h3', function (e) {
      screen.Column=null;
      setupdbEntities();
    });

    $(`.content`).off('click', '#dp *');

    $(`.content`).on('click', '#dp button', function (e) {
      $("#dialogColumn").dialog();
      $('#dialogColumn button').on('click', function () {
        for (var x = 0; x < schema.Model.DBModels.length; x++) {
          if (schema.Model.DBModels[x].UUID == screen.setupdbEntity) {
            schema.Model.DBModels[x].Columns.push(Entity.createColumn(schema, $('#columnname').val()));
          }
        }
        saveSchema();
        $('[aria-describedby="dialogColumn"]').hide();
        $('#columnname').val('');
        setupdbEntities();
      });
    });
    $(`.content`).on('click', '#dp ul li[data-column]', function (e) {
      screen.Column = $(this).data('column');
      setupdbEntities();
    });
  }
  return `<div id="dp">${html}</div>`;
}

function getDbModelDesignerPanel2() {
  let DBModel = schema.Model.DBModels.filter(e => e.UUID == screen.setupdbEntity)[0];
  let col = null;
  let html = '';
  if (DBModel) {
    if (screen.Column) {
      col = DBModel.Columns.filter(c => c.UUID == screen.Column)[0];
    }
    html += `<h3>${DBModel.Name + (col ? ' - ' + col.Name : '')}</h3>`;
    html += `<div>${col ? getModelColumnProPanel(col) : getModelProPanel(DBModel)}</div>`;
    //  html+=`${editableTable(DBModel.Columns)}`;
  }
  return `<div>${html}</div>`;
}

function getModelProPanel(DBModel) {
  let thead = '';
  let tbody = '';
  let defaultValues = { IsVirtual: false, IsEnumeratedType: false, IsAuditEnabled: schema.options.AuditEnabled };
  array = Object.keys(DBModel).map(m => ({ label: m, value: DBModel[m] }));
  if (array.length > 0) {
    thead += `<th>Property</th><th></th>`;
    ['Name', 'Notes', 'IsEnumeratedType', 'IsAuditEnabled', 'IsVirtual', 'CustomSQL'].map(e => array.filter(f => f.label == e)[0])
      .forEach(obj => {
        tbody += `<tr data-info=${JSON.stringify(obj)}>${Object.keys(array[0]).map(e => `<td ${e !== 'label' && obj['label'].indexOf('Is')!=0 ? 'contenteditable="true"' : ''} >
        ${e == 'label' || obj['label'].indexOf('Is')!=0?
         ( (obj[e] == null || obj[e] == undefined) ? (defaultValues[obj.label] || '') : (obj[e]) )
        :`<input type="checkbox" ${(((obj[e] == null || obj[e] == undefined) ? (defaultValues[obj.label] || '') : (obj[e]))?'checked="checked"':'')}/>`}
        </td>`).reduce((a, b) => a + b, '')}</tr>`;
      });
  }
  $(`.content`).off('focus,blur', '#modulepanel [contenteditable=true]');
  $('.content').on('focus', '#modulepanel [contenteditable=true]', function () {
    $(this).data("initialText", $(this).html());
  });

  $('.content').on('blur', '#modulepanel [contenteditable=true]', function () {
    // ...if content is different...
    if ($(this).data("initialText") !== $(this).html()) {
      // ... do something.
      let key = Object.keys($(this).parent().data('info')).filter((e, i) => i == $(this).index())[0];
      let info = $(this).parent().data('info');
      info[key] = $(this).text().trim();
      $(this).parent().data('info', info);
      $(this).data("initialText", $(this).html());
    }
  });

  $('.content').on('change', '#modulepanel [type=checkbox]', function () {
    // ...if content is different...
    let info =$(this).parent().parent().data('info');
    info.value=$(this).is(':checked');
    $(this).parent().parent().data('info',info);
  });
  $('.content').off('click', '#modulepanel button');
  $('.content').on('click', '#modulepanel button', function () {
    // ...if content is different...
    let changedProps =$('#modulepanel table tbody tr').toArray().map(e=>$(e).data('info'));
    for (var i = 0; i < schema.Model.DBModels.length; i++) {
      if(schema.Model.DBModels[i].UUID==screen.setupdbEntity){
        for(var j=0;j<changedProps.length;j++){
          schema.Model.DBModels[i][changedProps[j].label]=changedProps[j].value;
        }
      }
    }
    saveSchema();
  });

  return `<div id="modulepanel" ><table style="width: 100%;"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody><button>Update</button></table></div>`;
}
function getModelColumnProPanel(col) {
  let thead = '';
  let tbody = '';
  array = Object.keys(col).map(m => ({ label: m, value: col[m] }));
  if (array.length > 0) {
    thead += `<th>Property</th><th></th>`;
    ['Name', 'Notes','ComputedSQL'].map(e => array.filter(f => f.label == e)[0]).filter(r=>r)
      .forEach(obj => {
        tbody += `<tr data-info=${JSON.stringify(obj)}>${Object.keys(array[0]).map(e => `<td ${e !== 'label'? 'contenteditable="true"' : ''} >
        ${(  (obj[e])||'' )}
        </td>`).reduce((a, b) => a + b, '')}</tr>`;
      });
      ['RefType', 'RefTypeValue'].map(e => array.filter(f => f.label == e)[0]).filter(r=>r)
      .forEach(obj => {
        tbody += `<tr data-ref="${obj.label}" style="display:none;" data-info=${JSON.stringify(obj)}>${Object.keys(array[0]).map(e => `<td ${e !== 'label'? 'contenteditable="true"' : ''} >
        ${(  (obj[e])||'' )}
        </td>`).reduce((a, b) => a + b, '')}</tr>`;
      });
      let types=Stack(schema).backEnd.Parser.getBackendDataTypes(schema);
      ['Type'].map(e => array.filter(f => f.label == e)[0]).filter(r=>r)
      .forEach(obj => {
        let options= Object.keys(types)
        .map(e=>({ key:((obj.value=='Model'&&schema.Model.DBModels.filter(m=>m.UUID==e).length>0)?'Model':e),
          value:(schema.Model.DBModels.filter(m=>m.UUID==e)[0]||{}).Name||e}));
        tbody += `<tr data-info=${JSON.stringify(obj)}>${Object.keys(array[0])
          .map(e => `<td  >
        ${(  e == 'label'?(obj[e]):`
        <select data-key='${obj.label}'>
        ${options.map(e=>`<option value="${e.key}" ${((obj.value=='Model'?
        schema.Model.DBModels.filter(f=>f.UUID==col.RefType)[0].Name
        :obj.value)==e.value)?'selected=selected':''}>${e.value}</option>`).reduce((a,b)=>a+b,'')}</select>
        ` )}
        </td>`).reduce((a, b) => a + b, '')}</tr>`;
      });
      ['SQLType'].map(e => array.filter(f => f.label == e)[0]).filter(r=>r)
      .forEach(obj => {
        let options=(col.Type=='Model'?["int"]:types[col.Type])
          .map(e=>({ key:e, value:e}));
        tbody += `<tr data-info=${JSON.stringify(obj)}>${Object.keys(array[0])
          .map(e => `<td ${e !== 'label'? 'contenteditable="true"' : ''} >
        ${(  e == 'label'?(obj[e]):`
        <select data-key='${obj.label}'>
        ${options.map(e=>`<option value="${e.key}" ${((obj.value=='Model'?col.SQLType:obj.value)==e.value)?'selected=selected':''}>${e.value}</option>`).reduce((a,b)=>a+b,'')}</select>
        ` )}
        </td>`).reduce((a, b) => a + b, '')}</tr>`;
      });
      ['IsComputed'].map(e => array.filter(f => f.label == e)[0]).filter(r=>r)
      .forEach(obj => {
        tbody += `<tr data-info=${JSON.stringify(obj)}>${Object.keys(array[0]).map(e => `<td>
        ${e=='label'?obj[e]:`<input type="checkbox" ${(  (obj[e])?'checked=checked':'' )} />`}
        </td>`).reduce((a, b) => a + b, '')}</tr>`;
      });
      array = Object.keys(col.Constraints).map(m => ({ label: m, value: col.Constraints[m] }));
      ['IsNull', 'IsUnique','IsPrimary'].map(e => array.filter(f => f.label == e)[0]).filter(r=>r)
      .forEach(obj => {
        tbody += `<tr data-constraint='constraint' data-info=${JSON.stringify(obj)}>${Object.keys(array[0]).map(e => `<td>
        ${e=='label'?obj[e]:`<input type="checkbox" ${(  (obj[e])?'checked=checked':'' )} />`}
        </td>`).reduce((a, b) => a + b, '')}</tr>`;
      });
  }
  $(`.content`).off('focus,blur', '#modelcolumnpanel [contenteditable=true]');
  $('.content').on('focus', '#modelcolumnpanel [contenteditable=true]', function () {
    $(this).data("initialText", $(this).html());
  });

  $('.content').on('blur', '#modelcolumnpanel [contenteditable=true]', function () {
    // ...if content is different...
    if ($(this).data("initialText") !== $(this).html()) {
      // ... do something.
      let key = Object.keys($(this).parent().data('info')).filter((e, i) => i == $(this).index())[0];
      let info = $(this).parent().data('info');
      info[key] = $(this).text().trim();
      $(this).parent().data('info', info);
      $(this).data("initialText", $(this).html());
      PropChanged();
    }
  });
  $(`.content`).off('change', '#modelcolumnpanel [type=checkbox]');
  $('.content').on('change', '#modelcolumnpanel [type=checkbox]', function () {
    // ...if content is different...
    
    let info =$(this).parent().parent().data('info');
    info.value=$(this).is(':checked');
    $(this).parent().parent().data('info',info);
    PropChanged();
  });
  $(`.content`).off('change', '#modelcolumnpanel select:not(#displayfield)');
  $('.content').on('change', '#modelcolumnpanel select:not(#displayfield)', function () {
    // ...if content is different...
    let info =$(this).parent().parent().data('info');
    info.value=$(this).val();
    $(this).parent().parent().data('info',info);
    if($(this).data('key')=='Type'){
      if(info.value=='Model'){
        let info2=$('[data-ref=RefType]').data('info');
        let _ref=schema.Model.DBModels.filter(m=>m.Name==$(this).find('option').toArray().filter(f=>$(f).is(':selected'))[0].text)[0];
        info2.value=_ref.UUID;
        $('[data-ref=RefType]').data('info',info2);
        info2 =$('[data-ref=RefTypeValue]').data('info');
        info2.value.BindingKey=_ref.Columns.filter(e=>e.Constraints.IsPrimary)[0].UUID;
        info2.value.BindingDisplayValue=_ref.Columns.filter(e=>e.Constraints.IsPrimary)[0].UUID;
        info2.value.FilterColumns={};
        info2.value.FilterColumns[screen.Column]=info2.value.BindingKey;
        $('[data-ref=RefTypeValue]').data('info',info2);
      }else{
        $('[data-ref=RefType]').data('info',{ label:"RefType",value:null });
        $('[data-ref=RefTypeValue]').data('info',{ label:"RefType",value:{
          BindingKey:null,
          BindingDisplayValue:null,
          FilterColumns:{}
        }});
      }
      let _t=Stack(schema).backEnd.Parser.getBackendToDBTypes($(this).val(),schema);
      $('[data-key=SQLType]').html(_t.map(e=>`<option value="${e}">${e}</option>`).reduce((a,b)=>a+b,''));
      $('[data-key=SQLType]').val(_t[0]).trigger('change');
      setupdbEntities();
    }else{
      PropChanged();
    }
  });
  $('.content').off('click', '#modelcolumnpanel button');
  $('.content').on('click', '#modelcolumnpanel button', PropChanged);

  
  $('.content').off('change', '#displayfield');
  $('.content').on('change', '#displayfield', function(){
    let info2 =$('[data-ref=RefTypeValue]').data('info');
    info2.value.BindingDisplayValue=$(this).val();
    $('[data-ref=RefTypeValue]').data('info',info2);
    PropChanged();
  });
  let extraComponent = ''
  if(col.Type=='Model'){
    extraComponent +=`Display Field:<select id="displayfield">${schema.Model.DBModels.filter(f=>f.UUID==col.RefType)[0].Columns.map(e=>`<option value="${e.UUID}" ${e.UUID==col.RefTypeValue.BindingDisplayValue?'selected=selected':''}>${e.Name}</option>`).reduce((a,b)=>a+b,'')}</select>`;
  }
  
  return `<div id="modelcolumnpanel" ><table style="width: 100%;"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table>${extraComponent}</div>`;

}
function PropChanged() {
  // ...if content is different...
  let changedProps =$('#modelcolumnpanel table tbody tr').toArray().map(e=>$(e).data('info'));
  for (var i = 0; i < schema.Model.DBModels.length; i++) {
    if(schema.Model.DBModels[i].UUID==screen.setupdbEntity){
      for(var k=0;k<schema.Model.DBModels[i].Columns.length;k++){
        if(screen.Column==schema.Model.DBModels[i].Columns[k].UUID){
          for(var j=0;j<changedProps.length;j++){
            if(["IsNull","IsUnique","IsPrimary"].indexOf(changedProps[j].label)>-1){
              schema.Model.DBModels[i].Columns[k].Constraints[changedProps[j].label]=changedProps[j].value; 
            }else{
              schema.Model.DBModels[i].Columns[k][changedProps[j].label]=changedProps[j].value; 
            }
          }
        }
      }
    }
  }
  saveSchema();
}