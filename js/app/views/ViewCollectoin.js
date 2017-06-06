'use strict';
App.Views.ViewCollection = Backbone.View.extend({
	tagName: 'ol',
	className: 'todoList',

	// template: _.template('<ul> <%= personView.el %> </ul>'),

	initialize: function () {
		this.collection;	//не обязательно
	},

	addOne: function (todo) {
		var todoView = new App.Views.Todo({ model: todo });

		this.$el.append(todoView.render().el);
	},

	render: function () {
		this.collection.each(this.addOne, this);

		return this;
	}
})