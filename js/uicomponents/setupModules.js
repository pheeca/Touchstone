
setupModulesInit = function () {
	let html = `<div><h1>Create Dev User</h1>
<div>
	<label class="label" for="input">Name</label>
    <input class="input" type="text" id="name">
	</div>
	${editableTable(schema.Model.Modules)}
    <button>Submit</button></div>`;
	$(`.content`).html(`<div id="setupmudules" class="products"><div class=\"contentpartial\">${html}</div></div>`);

	$('#setupmudules button').on('click', function (e) {
		schema = Module.refreshModules(schema, $('.content table tbody tr').toArray().map(e => $(e).data('info')));
		if ($('#name').val()) {
			schema = Module.addModule(schema, $('#name').val());
		}
		saveSchema();
		setupModulesInit();
	});
}





/*
let html = `<h1>Minimal Form</h1>

<form>
	<label class="label" for="input">Input</label>
	<input class="input" type="text" id="input">

	<input class="checkbox" type="checkbox" id="checkbox">
	<label class="checkbox-label" for="checkbox">Checkbox</label>

	<input class="checkbox" type="checkbox" id="checkbox2">
	<label class="checkbox-label" for="checkbox2">Checkbox 2</label> <br>

	<input class="radio" type="radio" name="radio" id="radio">
	<label class="radio-label" for="radio">Radio</label>

	<input class="radio" type="radio" name="radio" id="radio2">
	<label class="radio-label" for="radio2">Radio 2</label>

	<label class="label" for="select">Select</label>
	<div class="select-wrap">
		<select class="select" id="select">
			<option value="option">Option</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</select>
	</div>

	<label class="label" for="textarea">Textarea</label>
	<textarea class="textarea" id="textarea"></textarea>
</form><style>input:focus {
    outline: none;
    border-color: #5c5edc;
    box-shadow: 0 0 10px #5c5edc;
}</style>`;
*/