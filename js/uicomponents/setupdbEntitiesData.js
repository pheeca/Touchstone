
setupdbEntitiesData =async function () {
  let panel1 = `<div class="contentsplit contentsplit-2 slimScroll">
	${getDbModelListDataPanel()}
    </div>`;
  let panel2 = `<div class="contentsplit contentsplit-7 slimScroll">
	${await getDbModelDesignerDataPanel()}
    </div>`;

  $(`.content`).html(`<div id="dbentitiesdata" class="products" style="max-height: 500px; overflow-y: hidden;">${panel1 + panel2}</div>`);
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
  })
];

  $("#dbentitiesdata").resizable({
    handles: 's',
    stop: function (event, ui) {
      $(this).css("width", '');
    }
  });
}

function getDbModelListDataPanel() {
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
  $(`.content`).off('click', `#dbentitiesdata #myUL .caret`);
  $(`.content`).on('click', `#dbentitiesdata #myUL .caret`, function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
  $(`.content`).off('click', `#dbentitiesdata #myUL .nested li`);
  $(`.content`).on('click', `#dbentitiesdata #myUL .nested li`, function () {
    screen.setupdbEntity = $(this).data('info');
    screen.Column = null;
    setupdbEntitiesData();
    $(`#dbentitiesdata #myUL .nested`).toArray().filter(r => JSON.stringify($(r).data('info')) == JSON.stringify($(this).parent().data('info')))[0].classList.toggle("active");
  });
  $(`.content`).off('change', `#dbentitiesdata #filter`)
  $(`.content`).on('change', `#dbentitiesdata #filter`, setupdbEntitiesData);
  html += `<div id="dialogEntity" title="Add New Entity" style="display:none;">
    <p></p>
    <input  id="entityname" />
    <select id="entitymodule">${schema.Model.Modules.map(_m => `<option value="${_m.UUID}">${_m.Name}</option>`).reduce((a, b) => a + b, '')}
    </select>
    <button>Create</button>
  </div>`;
  $(`.content`).off('click', '#dbentitiesdata #myUL *');

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



async function getDbModelDesignerDataPanel() {
  let DBModel = schema.Model.DBModels.filter(e => e.UUID == screen.setupdbEntity)[0];
  let html = '';
  if (DBModel) {
    html += `<h3>${DBModel.Name}</h3>`;
    let query = Stack(schema).database.getDataQueryFromModel(DBModel,schema,30);
    if(query.Success){
      let data = await Stack(schema).database.getDataFrom(schema,query.Message);
      if(data.Success){
        console.log(data.Message.recordset);
        html += editableTable(data.Message.recordset,false);
      }
    }

  }
  return `<div id="dp">${html}</div>`;
}
