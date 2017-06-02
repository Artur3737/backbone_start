'use strict';
App.Views.View = Backbone.View.extend({
	tagName: 'li',
	className: 'view',

	template: _.template(' <%= name %> ( <%= age %> ) - <%= job %>'),

	initialize: function () {
		this.model; 		//не обязательно
		// this.render();	render сдесь был но и без него работает
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});