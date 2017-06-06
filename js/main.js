'use strict';
(function () {
	window.App = {
		Models: {},
		Views: {},
		Collections: {},
		Controllers: {},
		templates: {}
	}

	document.addEventListener('DOMContentLoaded', main, false);

	function main () {
		App.Controllers.Controller();
	}

})();