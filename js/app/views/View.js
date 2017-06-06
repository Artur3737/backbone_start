'use strict';
App.Views.Todo = Backbone.View.extend({
	tagName: 'li',
	className: 'todo',
	events: {'click span': 'event'},

	template: _.template('<span> <%= task %> <%= ( priority ) %> <%= ( done ) %> </span> <button> edit </button> <button> delete </button>'),

	initialize: function () {
		this.model; 		//не обязательно
		// this.render();	render сдесь был но и без него работает
	},

	event: function () {
		alert('hello' + this.model.get('task'))
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});