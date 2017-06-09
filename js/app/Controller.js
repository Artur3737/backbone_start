'use strict'
App.Controllers.Controller = (function () {
	var todo = new App.Models.Todo(),
		todos = new App.Collections.Todos([{task: 'Выучить React',priority: 2, done: false}, 
											{task: 'Выучить Backbone',priority: 2, done: false}, 
											{task: 'Выучить Angular',priority: 1, done: false}]),
		viewCollection = new App.Views.ViewCollection({ collection: todos });

	$('#root').append(viewCollection.render().el);
});

// todo.set({'name': 'Ефросиния'});
// collection.add(todo);