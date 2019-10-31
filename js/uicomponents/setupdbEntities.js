
setupdbEntities = function(){
    let panel1 = `<div class="contentsplit contentsplit-2 slimScroll">
	${getDbModelListPanel()}
    </div>`;
    let panel2 = `<div class="contentsplit contentsplit-3 slimScroll">
	${getDbModelDesignerPanel()}
    </div>`;
    
    let panel3 = `<div class="contentsplit contentsplit-5 slimScroll">
	${getDbModelDesignerPanel2()}
    </div>`;
    $(`.content`).html(`<div id="createUser" class="products" style="max-height: 500px; overflow-y: hidden;">${panel1+panel2+panel3}</div>`);
    var element = document.querySelectorAll('.slimScroll');
    var one = [new slimScroll(element[0], {
        'wrapperClass': 'scroll-wrapper unselectable mac',
        'scrollBarContainerClass': 'scrollBarContainer',
        'scrollBarContainerSpecialClass': 'animate',
        'scrollBarClass': 'scroll',
        'keepFocus': true
    }),new slimScroll(element[1], {
        'wrapperClass': 'scroll-wrapper unselectable mac',
        'scrollBarContainerClass': 'scrollBarContainer',
        'scrollBarContainerSpecialClass': 'animate',
        'scrollBarClass': 'scroll',
        'keepFocus': true
    }),new slimScroll(element[2], {
        'wrapperClass': 'scroll-wrapper unselectable mac',
        'scrollBarContainerClass': 'scrollBarContainer',
        'scrollBarContainerSpecialClass': 'animate',
        'scrollBarClass': 'scroll',
        'keepFocus': true
    })];
   
$( "#createUser" ).resizable({  handles: 's',
stop: function(event, ui) {
    $(this).css("width", '');
}});
}

function getDbModelListPanel(){
    let array = schema.Model.Modules.map(_m=>({ 
        Name:_m.Name,
        Models:schema.Model.DBModels.filter(e=>_m.UUID==e.Module).filter(f=>f.Name.indexOf($('#filter').val()||'')>-1).map(e=> ({
            UUID:e.UUID,
            Name:e.Name
        }))
    })).filter(f=>f.Models.length);
    let html =`<input id="filter" value="${$('#filter').val()||''}" /><button>+ Add</button>`;
    if(array.length>0){
        array.forEach(obj=>{
            html+=`<li><span class="caret">${obj.Name}</span>
                <ul class="nested" data-info=${JSON.stringify(obj)}>
                ${obj.Models.map(m=>`<li data-info=${m.UUID} >${m.Name}</li>`).reduce((a,b)=>a+b,'')}
                </ul>
            </li>`;
        });
    }
    $(`.content`).off('click',`#myUL .caret`);
    $(`.content`).on('click',`#myUL .caret`,function(){
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
    $(`.content`).on('click',`#myUL .nested li`,function(){
      screen.setupdbEntity=$(this).data('info');
      setupdbEntities();
      $(`#myUL .nested`).toArray().filter(r=>JSON.stringify($(r).data('info'))==JSON.stringify($(this).parent().data('info')))[0].classList.toggle("active");
  });
    $(`.content`).off('change',`#filter`)
    $(`.content`).on('change',`#filter`,setupdbEntities);
    html+=`<div id="dialogEntity" title="Add New Column" style="display:none;">
    <p></p>
    <input  id="entityname" />
    <select id="entitymodule">${schema.Model.Modules.map(_m=>`<option value="${_m.UUID}">${_m.Name}</option>`).reduce((a,b)=>a+b,'')}
    </select>
    <button>Create</button>
  </div>`;
  $(`.content`).off('click','#myUL *');

    $(`.content`).on('click','#myUL button',function(e){
      $( "#dialogEntity" ).dialog();
      $( "#dialogEntity button" ).on('click',function(){
        debugger
        console.log( Entity.createEntity(schema,$('#entityname').val(),$('#entitymodule').val()));
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



function getDbModelDesignerPanel(){
  let DBModel = schema.Model.DBModels.filter(e=>e.UUID==screen.setupdbEntity)[0];
  let html='';
  if(DBModel){
    html+=`<h3>${DBModel.Name}</h3><button>+ add column</button>`;
    html+=`<ul>${DBModel.Columns.map(c=>`<li>${c.Name}</li>`).reduce((a,b)=>a+b,'')}</ul>`;
  html+=`<div id="dialogColumn" title="Basic dialog" style="display:none;">
  <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
</div>`;
   
    $(`.content`).off('click','#dp *');

    $(`.content`).on('click','#dp button',function(e){
      $( "#dialogColumn" ).dialog()
    });
  }
  return `<div id="dp">${html}</div>`;
}

function getDbModelDesignerPanel2(){
  let DBModel = schema.Model.DBModels.filter(e=>e.UUID==screen.setupdbEntity)[0];
  let html='';
  if(DBModel){
    html+=`<h3>${DBModel.Name}</h3>`;
    html+=`<ul>${editableTable(DBModel)}</ul>`;
  //  html+=`${editableTable(DBModel.Columns)}`;
  }
  return `<div>${html}</div>`;
}