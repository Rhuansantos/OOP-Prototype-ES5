window.addEventListener('load', function(){

// Form
document.getElementById('insertPet').addEventListener('submit', 
	function(e){
		e.preventDefault();

		var petName = document.getElementById('name').value;
		var petAge = document.getElementById('age').value;


		var newPet = Pet(petName, petAge);

	});


	function display(){

	}

});