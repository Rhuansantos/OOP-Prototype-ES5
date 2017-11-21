var petArray = [];
var petContainer = document.getElementById('petList');

// ================== ES5 ================== //
var Shelter = (function() {
    function Shelter(_id, _location) {
        this.id = _id;
        this._location = 'Orlando';
    }
    return Shelter;
});

var Pet = (function() {
    Pet.prototype = Object.create(Shelter.prototype);
    function Pet(_name, _age, _type, _location) {
        Shelter.call(this);
        this.shelterLocation = _location;
        this.name = _name;
        this.age = _age;
        this.type = _type;
        Pet.prototype.buildObj.call(this);
    }

    Pet.prototype.buildObj = function() {
    	//building object
        petObj = {};
        petObj.name = this.name;
        petObj.age = this.age;
        petObj.type = this.type;
        petObj.shelterLocation = this.shelterLocation;

        // Push it to the array
        petArray.push(petObj);

        Pet.prototype.verifyLocation.call(this);
    };

    Pet.prototype.verifyLocation = function() {

        for (let i = 0; i < petArray.length; i++) {
            // if something looks diferent then change it for every single element
            if (petArray[i].shelterLocation != this.shelterLocation) {
                petArray.forEach(function(el, i) {
                    petArray[i].shelterLocation = this.shelterLocation;
                });
            }
        }

        Pet.prototype.display.call(this);

    }
    Pet.prototype.display = function() {

        var tempAge = [];
    	// display pets from the array
        petArray.forEach(function(el, i) {

            tempAge.push(Number(el.age));
            var template = `
				 <li data-key=${i}>
					<h4>Name: ${el.name}</h4>
					<h4>Age: ${el.age}</h4>
					<h4>Type: ${el.type}</h4>
					<h4>Location: ${el.shelterLocation}</h4>
					<hr />
				 </li>
			 `;
            petContainer.insertAdjacentHTML('beforeend', template);

        });

        var ageAvg = Util.avg(tempAge);
        document.getElementById('ageAvg').innerHTML = ageAvg;
    };

    return Pet;
})();