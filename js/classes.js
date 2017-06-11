var petArray = [];
var petContainer = document.getElementById('petList');

// ================== ES5 ================== //
var Shelter = (function (){
	function Shelter(_id, _location){
		this.id = _id;
		this.location = 'test';
	}
	return Shelter;
});

var Pet = (function (){
	Pet.prototype = Object.create(Shelter.prototype);
	function Pet(_name, _age, _type){
		Shelter.call(this);
		this.name = _name;
		this.age = _age;
		this.type = _type;
		Pet.prototype.buildObj.call(this);
	}

	 Pet.prototype.buildObj = function() {
		 petObj = {};
		 petObj.name = this.name;
		 petObj.age = this.age;
		 petObj.type = this.type;

	   petArray.push(petObj);

		 Pet.prototype.display.call(this);
	 };
	 Pet.prototype.display = function (){

		 petArray.forEach(function(el, i) {
			 var template = `
				 <li data-key=${i}>
						<h4>Name: ${el.name}</h4>
						<h4>Age: ${el.age}</h4>
						<h4>Type: ${el.petType}</h4>
						<h4>Location: ${el.shelter}</h4>
						 <hr />
				 </li>
			 `;
			 petContainer.insertAdjacentHTML('beforeend', template);

		 });
  };

	return Pet;
})();
