'use strict';
App.Views.Todo = Backbone.View.extend({
	tagName: 'li',
	
	className: 'todo',

	events: {
		'dblclick span': 'editTodo',
		'click .delete': 'delete'
	},

	template: _.template('<span> <%= task %> ( <%= priority %> ) <%= done %> </span> <button class="delete"> delete </button>'),

	initialize: function () {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},

	// editTodo: function () {
	// 	var input = document.createElement('input'),
	// 		span = this.el.getElementsByTagName('span')[0];

	// 	span.remove();

	// 	input.value = this.model.get('task');
	// 	this.$el.prepend(input);

	// 	// this.model.set('task', input.value);

	// 	console.log(this.el);
	// 	// console.log(this.model)
	// 	// console.log(this.model.get('task'));
	// },

	editTodo: function () {
		var edit = new App.Views.Edit(this.model),
			span = this.el.getElementsByTagName('span')[0];

		span.remove();

		this.$el.html(edit.render().$el);

		console.log(this.$el);

		return this;
	},

	delete: function () {
		this.model.destroy();
		// console.log(todos);
	},

	remove: function () {
		this.$el.remove();
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});