// waiting for the dom to be ready
window.addEventListener('load', function(){

// Form
document.getElementById('insertPet').addEventListener('submit',
	function(e){
		// prevent page from reload
		e.preventDefault();

		// form fields
		var petName = document.getElementById('name').value;
		var petAge  = document.getElementById('age').value;
		var selectOption = document.getElementById('type');
		var petType = selectOption.options[selectOption.selectedIndex].value;
		var shelter = document.getElementById('shelter').value;

		// clean the html before insert new elements
		petContainer.innerHTML = '';

		// instance 
		var newPet = Pet(petName, petAge, petType, shelter);

	});

});
