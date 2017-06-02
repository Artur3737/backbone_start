'use strict';
App.Collections.ViewCollection = Backbone.View.extend({
	tagName: 'ul',

	// template: _.template('<ul> <%= personView.el %> </ul>'),

	initialize: function () {
		this.collection;	//не обязательно
	},

	render: function () {
		this.collection.each(function (person) {
			var personView = new App.Views.View({ model: person });
			this.$el.append(personView.render().el);
		}, this);

		return this;
	}
})