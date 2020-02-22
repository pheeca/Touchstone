
endpointConfiguration = function () {
    let panel1 = `<div class="contentsplit contentsplit-2 slimScroll">
      ${getApiListPanel()}
      </div>`;
    let panel2 = `<div class="contentsplit contentsplit-3 slimScroll">
      ${getAPIDesignerPanel()}
      </div>`;

    let panel3 = `<div class="contentsplit contentsplit-5 slimScroll">
      ${getAPITypeDesignerPanel()}
      </div>`;
    let panel4 = `<div class="contentsplit contentsplit-2 slimScroll">
      ${getAPIDesignerEntityPanel()}
      </div>`;
    let panel5 = `<div class="contentsplit contentsplit-3 slimScroll">
    ${getAPIPropertiesPanel()}
      </div>`;

    let panel6 = `<div class="contentsplit contentsplit-5 slimScroll">
     
      </div>`;
    $(`.content`).html(`<div id="endpoints" class="products" style="max-height: 500px; overflow-y: hidden;">${panel1 + panel2 + panel3}</div><div>${panel4 + panel5 + panel6}</div>`);
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
    }), new slimScroll(element[3], {
        'wrapperClass': 'scroll-wrapper unselectable mac',
        'scrollBarContainerClass': 'scrollBarContainer',
        'scrollBarContainerSpecialClass': 'animate',
        'scrollBarClass': 'scroll',
        'keepFocus': true
    }), new slimScroll(element[4], {
        'wrapperClass': 'scroll-wrapper unselectable mac',
        'scrollBarContainerClass': 'scrollBarContainer',
        'scrollBarContainerSpecialClass': 'animate',
        'scrollBarClass': 'scroll',
        'keepFocus': true
    }), new slimScroll(element[5], {
        'wrapperClass': 'scroll-wrapper unselectable mac',
        'scrollBarContainerClass': 'scrollBarContainer',
        'scrollBarContainerSpecialClass': 'animate',
        'scrollBarClass': 'scroll',
        'keepFocus': true
    })];

    $("#endpoints").resizable({
        handles: 's',
        stop: function (event, ui) {
            $(this).css("width", '');
        }
    });
    setFstDropdown();
}

function getApiListPanel() {
    let array = schema.Model.Modules.map(_m => ({
        Name: _m.Name,
        EndPoints: schema.RequestHandler.EndPoints.filter(e => _m.UUID == e.Module).filter(f => f.Name.indexOf($('#filter').val() || '') > -1).map(e => ({
            UUID: e.UUID,
            Name: e.Name
        }))
    })).filter(f => f.EndPoints.length);
    let html = `<input id="filter" value="${$('#filter').val() || ''}" /><button>+ Add</button>`;
    if (array.length > 0) {
        array.forEach(obj => {
            let a = obj.EndPoints.filter(f => f.UUID == screen.setupApi);
            a = [];
            html += `<li><span class="caret ${a.length > 0 ? 'caret-down' : ''}">${obj.Name}</span>
                  <ul class="nested ${a.length > 0 ? 'active' : ''}" data-info=${JSON.stringify(obj)}>
                  ${obj.EndPoints.map(m => `<li data-info=${m.UUID} >${m.Name}</li>`).reduce((a, b) => a + b, '')}
                  </ul>
              </li>`;
        });
    }
    $(`.content`).off('click', `#endpoints #myUL .caret`);
    $(`.content`).on('click', `#endpoints #myUL .caret`, function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
    $(`.content`).off('click', `#endpoints #myUL .nested li`)
    $(`.content`).on('click', `#endpoints #myUL .nested li`, function () {
        screen.setupApi = $(this).data('info');
        endpointConfiguration();
        $(`#endpoints #myUL .nested`).toArray().filter(r => JSON.stringify($(r).data('info')) == JSON.stringify($(this).parent().data('info')))[0].classList.toggle("active");
    });
    $(`.content`).off('change', `#endpoints #filter`)
    $(`.content`).on('change', `#endpoints #filter`, endpointConfiguration);
    html += `<div id="dialogEntity" title="Add New Endpoint" style="display:none;">
      <p></p>
      <input  id="entityname" />
      <select id="entitymodule">${schema.Model.Modules.map(_m => `<option value="${_m.UUID}">${_m.Name}</option>`).reduce((a, b) => a + b, '')}
      </select>
      <button>Create</button>
    </div>`;
    $(`.content`).off('click', '#endpoints #myUL *');

    $(`.content`).on('click', '#endpoints #myUL button', function (e) {
        $("#dialogEntity").dialog();
        $("#dialogEntity button").on('click', function () {
            debugger
            /*
            schema = Entity.createEntity(schema, $('#entityname').val(), $('#entitymodule').val());
            saveSchema();
            $('[aria-describedby="dialogEntity"]').hide();
            $('#entityname').val('');
            endpointConfiguration();
            */
        });
    });
    return `<ul style="width: 100%;text-align: left;" id="myUL">${html}</ul>`;
}


function getAPITypeDesignerPanel() {
    let EndPoint = schema.RequestHandler.EndPoints.filter(e => e.UUID == screen.setupApi)[0];


    let getAPITypeDesignerPanel_API = function () {
        let EndPoint = schema.RequestHandler.EndPoints.filter(e => e.UUID == screen.setupApi)[0];
        let html = '';
        for (var x = 0; x < schema.RequestHandler.APIHandlers.API.length; x++) {
            if (schema.RequestHandler.APIHandlers.API[x].UUID == EndPoint.Ref_UUID) {
                //debugger
            }
        }
        return `<div id="typeapi">${html}</div>`;
    }

    let getAPITypeDesignerPanel_UI = function () {
        let EndPoint = schema.RequestHandler.EndPoints.filter(e => e.UUID == screen.setupApi)[0];
        let typeUI = schema.RequestHandler.UIHandlers.UI.filter(e => e.UUID == EndPoint.Ref_UUID)[0];

        let html = '';
        if (EndPoint && typeUI) {
            html += `<div><label class="label" for="input">UI Type : </label><select name="type" value="${typeUI.Type}">${schema.RequestHandler.UIHandlers.options.Types.map(_m => `<option value="${_m}" ${_m == typeUI.Type ? 'selected' : ''}>${_m}</option>`).reduce((a, b) => a + b, '')}</select></div>`;
            html += `<div><label class="label" for="input">Entiy : </label><select name="entity" ><option>Select Entity</option>${schema.Model.DBModels.map(_m => `<option value="${_m.UUID}" ${_m.UUID == typeUI.Entity ? 'selected' : ''}>${_m.Name}</option>`).reduce((a, b) => a + b, '')}</select></div>`;
            html += `<div><label class="label" for="input">Heading : </label><input name="heading" value="${typeUI.Heading || ''}" /></div>`;
        }
        
        $(`.content`).on('change', `#endpoints #typeui input`, function () {
            for (var x = 0; x < schema.RequestHandler.UIHandlers.UI.length; x++) {
                if (schema.RequestHandler.UIHandlers.UI[x].UUID == EndPoint.Ref_UUID) {
                    schema.RequestHandler.UIHandlers.UI[x].Heading = $('#typeui [name="heading"]').val();
                }
            }
            saveSchema();
            endpointConfiguration();
        });
        $(`.content`).on('change', `#endpoints #typeui select`, function () {
            for (var x = 0; x < schema.RequestHandler.UIHandlers.UI.length; x++) {
                if (schema.RequestHandler.UIHandlers.UI[x].UUID == EndPoint.Ref_UUID) {
                    schema.RequestHandler.UIHandlers.UI[x].Type = $('#typeui [name="type"]').val();
                    schema.RequestHandler.UIHandlers.UI[x].Entity = $('#typeui [name="entity"]').val();
                }
            }
            saveSchema();
            endpointConfiguration();
        });

        return `<div id="typeui">${html}</div>`;
    }
    let html = '';
    if (EndPoint) {
        let apiTypeFunc = EndPoint.Type == 'API' ? getAPITypeDesignerPanel_API : getAPITypeDesignerPanel_UI;
        html = apiTypeFunc();
    }
    $(`.content`).off('change', `#endpoints #typeui input,#endpoints #typeui select`);
    return `<div id="apidp">${html}</div>`;
}

function getAPIDesignerPanel() {
    let EndPoint = schema.RequestHandler.EndPoints.filter(e => e.UUID == screen.setupApi)[0];
    let html = '';
    if (EndPoint) {
        html += `<h3>${EndPoint.Name}</h3>`;
        html += `<div><label class="label" for="input">Name : </label><input name="name" value="${EndPoint.Name}" /></div>`;
        html += `<div><label class="label" for="input">URL : </label><input name="url" readonly value="${EndPoint.URL}" /></div>`;
        html += `<div><label class="label" for="input">Type : </label><select name="type" value="${EndPoint.Type}"><option>UI</option><option>API</option></select></div>`;
        html += `<div><label class="label" for="input">Module : </label><select name="module" value="${EndPoint.Module}">${schema.Model.Modules.map(_m => `<option value="${_m.UUID}" ${_m.UUID == EndPoint.Module ? 'selected=selected' : ''}>${_m.Name}</option>`).reduce((a, b) => a + b, '')}</select></div>`;
        // html += `<div><button>Save</button></div>`;

        $(`.content`).off('change', '#apidp input,#apidp select');

        $(`.content`).on('change', '#apidp input,#apidp select', function (e) {
            for (var x = 0; x < schema.RequestHandler.EndPoints.length; x++) {
                if (schema.RequestHandler.EndPoints[x].UUID == screen.setupApi) {
                    schema.RequestHandler.EndPoints[x].Name = $('#apidp [name="name"]').val();
                    schema.RequestHandler.EndPoints[x].Type = $('#apidp [name="type"]').val();
                    schema.RequestHandler.EndPoints[x].Module = $('#apidp [name="module"]').val();
                }
            }
            saveSchema();
            endpointConfiguration();
        });
    }
    return `<div id="apidp">${html}</div>`;
}

function getAPIDesignerEntityPanel() {
    let EndPoint = schema.RequestHandler.EndPoints.filter(e => e.UUID == screen.setupApi)[0];
    let html = '';
    if (EndPoint) {
        let endPointType;
        debugger
        if (EndPoint.Type == 'API') {
            endPointType = schema.RequestHandler.APIHandlers.API.filter(f => f.UUID == EndPoint.Ref_UUID)[0]

        } else {
            endPointType = schema.RequestHandler.UIHandlers.UI.filter(f => f.UUID == EndPoint.Ref_UUID)[0]
        }
        let _model = endPointType?schema.Model.DBModels.filter(e => e.UUID == endPointType.Entity)[0]:null;
        if (_model) {
            html += `<h3>${_model.Name}</h3>`;
            html += `<div><select name="selectedColumns" class='fstdropdown-select' multiple="multiple">${_model.Columns.map(e=>`<option data-id="${e.UUID}">${e.Name}</option>`).reduce((a,b)=>a+b,'')}</select></div>`
            let lis =_model.Columns.map(e=>`<li data-id="${e.UUID}">${e.Name}</li>`).reduce((a,b)=>a+b,'');
            html += `<ul>${lis}</ul>`;
           
        }
    }
    $(`.content`).off('click', `#apientity li`);
    $(`.content`).on('click', `#apientity li`,function(){
        screen.apiEntityColumnId = $(this).data('id');
    });
    $(`.content`).off('change', `#apientity select[name=selectedColumns]`);
    $(`.content`).on('change', `#apientity select[name=selectedColumns]`,function(){
        debugger
        //screen.apiEntityColumnId = $(this).data('id');
    });

    return `<div id="apientity">${html}</div>`;
}


function getAPIPropertiesPanel() {
    let EndPoint = schema.RequestHandler.EndPoints.filter(e => e.UUID == screen.setupApi)[0];
    let html = '';
    if (EndPoint) {
        let endPointType;

        if (EndPoint.Type == 'API') {
            endPointType = schema.RequestHandler.APIHandlers.API.filter(f => f.UUID == EndPoint.Ref_UUID)[0]

        } else {
            endPointType = schema.RequestHandler.UIHandlers.UI.filter(f => f.UUID == EndPoint.Ref_UUID)[0]
        }
        let _model = endPointType?schema.Model.DBModels.filter(e => e.UUID == endPointType.Entity)[0]:null;
        if (_model) {
            html += `<h3>${_model.Name}</h3>`;
            let lis =_model.Columns.map(e=>`<li data-id="${e.UUID}">${e.Name}</li>`).reduce((a,b)=>a+b,'');
            html += `<ul>${lis}</ul>`
        }
    }
    $(`.content`).off('click', `#apientity li`);
    $(`.content`).on('click', `#apientity li`,function(){
        screen.apiEntityColumnId = $(this).data('id');
    });
    return `<div id="apientity">${html}</div>`;
}