'use strict';
App.Views.Edit = Backbone.View.extend({
	tagName: 'input',

	events : {
		'KEY_ENTER, blur': 'edited' 
	},

	initialize: function (model){
		this.model = model;
	},

	edited: function () {

	},

	render: function () {
		var input = document.createElement('input');



		input.value = this.model.get('task');
		this.$el.prepend(input);

		// this.model.set('task', input.value);
		// console.log(this.model.get('task'));

		// input.html(this.model.get('title'));

		return this;
	}
});