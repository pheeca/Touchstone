
setupDevEnvInit = function(){
    let html = `<div><h1>Create Dev User</h1>
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
    <button>Submit</button></div>`;
    $(`.content`).html(`<div id="setupDevEnv" class="products"><div class=\"contentpartial\">${html}</div></div>`);

    



$('#currentUser').on('change',function(e){
    //schema.Dev.Users
    schema=Dev.setCurrentUser(schema,$('#currentUser').val());
    saveSchema();
    setupDevEnvInit();
});

$('[type="file"]').on('change',function(e){
    if(e.target.files.length>0){
        $(this).siblings('input[type=hidden]').val(e.target.files[0].path);
    }
});
$('#createUser button').on('click',function(e){
    //schema.Dev.Users
    schema=Dev.editUserName(schema,$('#name').val());
    schema=Dev.setConnectionString(schema,$('#connectionstring').val());
    schema=Dev.setConnectionStringLog(schema,$('#connectionstringlog').val());
    schema=Dev.setSolutionFolder(schema,$('#solutionfolder').val());
    schema=Dev.setSolutionStartupFolder(schema,$('#SolutionStartupFolder').val());
    saveSchema();
    setupDevEnvInit();
});

}