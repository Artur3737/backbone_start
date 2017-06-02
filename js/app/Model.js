'use strict';
App.Models.Person = Backbone.Model.extend({
	defaults: {
		name: 'Stranger',
		age: 25,
		job: 'Developer'
	}

// с валидацией что-то не срослось
	// validate: function (attrs) {
	// 	console.log(attrs);
	// 	if (typeOf(attrs.name) !== 'string') {
	// 		return console.log('Имя должно быть');
	// 	}
	// }
});