App.Collections.Todos = Backbone.Collection.extend({
	model: App.Models.Todo
});




// function CarMaker () {};

// CarMaker.prototype.drive = function () {
// 	return 'Vroom, I have ' + this.doors + 'doors';
// };

// CarMaker.factory = function (type) {
// 	var constr = type,
// 	newcar;

// 	if (typeof CarMaker[constr] !== "function") {
// 		throw {
// 			name: 'Error',
// 			massage: constr + " doesn`t exist"
// 		};
// 	}

// 	if (typeof CarMaker[constr].prototype.drive !== "function") {
// 		CarMaker[constr].prototype = new CarMaker();
// 	}

// 	newcar = new CarMaker[constr]();
// 	return newcar;
// };

// CarMaker.Compact = function () {
// 	this.dors = 4
// }

// CarMaker.Convertible = function () {
// 	this.dors = 2;
// };

// CarMaker.SUV = function () {
// 	this.doors = 24;
// }
