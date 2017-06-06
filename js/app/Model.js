'use strict';
App.Models.Todo = Backbone.Model.extend({
	defaults: {
		task: 'Выучить Backbone',
		priority: 3,
		done: false
	}

// с валидацией что-то не срослось
	// validate: function (attrs) {
	// 	console.log(attrs);
	// 	if (typeOf(attrs.name) !== 'string') {
	// 		return console.log('Имя должно быть');
	// 	}
	// }
});