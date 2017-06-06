// ==== ES5
var Shelter = (function (_id, _location){
	function Shelter(){
		this.id = _id;
		this.location = _location;
	}
	
	return Shelter;
});

var Pet = (function (_name, _age){
	console.log(_name);
	function Pet(){
		this.name = _name;
		this.age = _age;
		Pet.prototype.create();
	}

	 Pet.prototype.create = function (){

        console.log('I was created');
    };

	return Pet;
});