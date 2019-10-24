
setupDevEnvInit = function(){
    let html = `<div><h1>Create Dev User 1</h1>
<div>
	<label class="label" for="input">Select Current User</label>
    <select value="${Dev.getCurrentUser(schema).UUID}" id="currentUser">
    ${Dev.getUsers(schema).map(u=>`<option value="${u.UUID}" ${Dev.getCurrentUser(schema).UUID==u.UUID?'selected':''}>${u.Name}</option>`).join('')}
    </select>
    
<div>
<label class="label" for="input">Name</label>
<input class="input" type="text" id="name" value="${Dev.getCurrentUser(schema).Name}">
</div>

<div>
	<label class="label" for="input">ConnectionString</label>
    <input class="input" type="text" id="connectionstring" value="${Dev.getCurrentUser(schema).EnvironmentVariables.ConnectionString}">
    </div>
    
<div>
<label class="label" for="input">ConnectionStringLog</label>
<input class="input" type="text" id="connectionstringlog" value="${Dev.getCurrentUser(schema).EnvironmentVariables.ConnectionStringLog}">
</div>

<div>
	<label class="label" for="input">SolutionFolder</label>
    <input class="input" type="file" webkitdirectory multiple />
    <input class="input" type="hidden" id="solutionfolder" value="${Dev.getCurrentUser(schema).EnvironmentVariables.SolutionFolder}" />
    </div>
    <div>
        <label class="label" for="input">SolutionStartupFolder</label>
        <input class="input" type="file" webkitdirectory multiple />
        <input class="input" type="hidden" id="SolutionStartupFolder" value="${Dev.getCurrentUser(schema).EnvironmentVariables.SolutionStartupFolder}" />
        </div>
    </div>
    <button>Submit</button></div>
    <style>input:focus,select:focus { 
    outline: none;
    border-color: #5c5edc;
    box-shadow: 0 0 10px #5c5edc;
}</style>`;
    $(`.content`).html(`<div id="createUser" class="products"><div class=\"contentpartial\">${html}</div></div>`);

    
$(`.content`).off('click','#createUser *');



$(`.content`).off('change','#currentUser,[type="file"]');
$(`.content`).on('change','#currentUser',function(e){
    //schema.Dev.Users
    schema=Dev.setCurrentUser(schema,$('#currentUser').val());
    saveSchema();
    setupDevEnvInit();
});

$(`.content`).on('change','[type="file"]',function(e){
    if(e.target.files.length>0){
        $(this).siblings('input[type=hidden]').val(e.target.files[0].path);
    }
});
$(`.content`).on('click','#createUser button',function(e){
    //schema.Dev.Users
    schema=Dev.editUserName(schema,$('#name').val());
    schema=Dev.setConnectionString(schema,$('#connectionstring').val());
    schema=Dev.setConnectionStringLog(schema,$('#connectionstringlog').val());
    schema=Dev.setSolutionFolder(schema,$('#solutionfolder').val());
    schema=Dev.setSolutionStartupFolder(schema,$('#SolutionStartupFolder').val());
    saveSchema();
    setupDevEnvInit();
});
/*
$(`.content`).on('change','#connectionstringlog',function(e){
    Stack(schema).database.checkConnection($(this).val())
});*/

}