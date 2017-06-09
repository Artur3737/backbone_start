'use strict';
App.Views.ViewCollection = Backbone.View.extend({
	tagName: 'ul',
	className: 'todoList',

	template: _.template('<div> <%= elem %> </div>'),

	initialize: function () {
		this.collection;	//не обязательно
	},

	addOne: function () {
		 
	},

	fill: function (todo) {
		var todoView = new App.Views.Todo({ model: todo });

		this.$el.append(todoView.render().el);

		return this;
	},

	render: function () {	
		this.$el.append(this.collection.each(this.fill, this));

		return this;
	}
})