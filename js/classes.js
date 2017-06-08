// ================== ES5 ================== //
var Shelter = (function (_id, _location){
	function Shelter(){
		this.id = _id;
		this.location = _location;
	}
	return Shelter;
});

var Pet = (function (_name, _age){
	Pet.prototype = Object.create(Shelter.prototype);
	function Pet(){
		Shelter.call(this);
		this.name = _name;
		this.age = _age;
		Pet.prototype.create.call(this);
		console.log('2');
	}
	 Pet.prototype.create = function (){
        console.log('I was created');
    };
	return Pet;
});