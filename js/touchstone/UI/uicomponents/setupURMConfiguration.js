
setupURMConfiguration = function () {
  let html = `<div><h1>Configure User Rights Management</h1>
<div>
  <label class="label" for="input">Select User Entity</label>
  <select value="${schema.Model.URM.User}" id="urmUser">
  <option>Select Entity</option>
  ${schema.Model.DBModels.map(u => `<option value="${u.UUID}" ${schema.Model.URM.User == u.UUID ? 'selected' : ''}>${u.Name}</option>`).join('')}
  </select>
</div>
  
<div>
  <label class="label" for="input">Select Role Entity</label>
  <select value="${schema.Model.URM.Role}" id="urmRole">
  <option>Select Entity</option>
  ${schema.Model.DBModels.map(u => `<option value="${u.UUID}" ${schema.Model.URM.Role == u.UUID ? 'selected' : ''}>${u.Name}</option>`).join('')}
  </select>
</div>
<div>
  <label class="label" for="input">Select Page Entity</label>
  <select value="${schema.Model.URM.Page}" id="urmPage">
  <option>Select Entity</option>
  ${schema.Model.DBModels.map(u => `<option value="${u.UUID}" ${schema.Model.URM.Page == u.UUID ? 'selected' : ''}>${u.Name}</option>`).join('')}
  </select>
</div>
<div>
  <label class="label" for="input">Select Menu Entity</label>
  <select value="${schema.Model.URM.Menu}" id="urmMenu">
  <option>Select Entity</option>
  ${schema.Model.DBModels.map(u => `<option value="${u.UUID}" ${schema.Model.URM.Menu == u.UUID ? 'selected' : ''}>${u.Name}</option>`).join('')}
  </select>
</div>
<div>
  <label class="label" for="input">Select PagePermission Entity</label>
  <select value="${schema.Model.URM.PagePermission}" id="urmPagePermission">
  <option>Select Entity</option>
  ${schema.Model.DBModels.map(u => `<option value="${u.UUID}" ${schema.Model.URM.PagePermission == u.UUID ? 'selected' : ''}>${u.Name}</option>`).join('')}
  </select>
</div>
  <button>Submit</button></div>`;
  $(`.content`).html(`<div id="urm" class="products"><div class=\"contentpartial\">${html}</div></div>`);





  $('#urm button').on('click', function (e) {
    debugger
    schema.Model.URM.User = $('#urmUser').val();
    schema.Model.URM.Role = $('#urmRole').val();
    schema.Model.URM.Page = $('#urmPage').val();
    schema.Model.URM.Menu = $('#urmMenu').val();
    schema.Model.URM.PagePermission = $('#urmPagePermission').val();
    saveSchema();
    setupURMConfiguration();
  });

}