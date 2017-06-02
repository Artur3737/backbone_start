'use strict'
App.Controllers.Controller = (function () {
	var person = new App.Models.Person(),
		collection = new App.Collections.Collection([{name: 'Ефросиния',age: 22, job: 'Manager'},{name: 'Адам',age: 12, job: 'Ап'}]),
		viewCollection = new App.Views.ViewCollection({ collection: collection });

	$('#root').append(viewCollection.render().el);
	// person.set({'name': 'Ефросиния'});

	// collection.add(person);
	// console.log(collection);
});