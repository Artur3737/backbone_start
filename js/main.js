'use strict';
(function () {
	window.App = {
		Models: {},
		Views: {},
		Collectoins: {},
		Controllers: {}
	}
	document.addEventListener('DOMContentLoaded', main, false);

	function main () {
		new App.Controllers.Controller(); 
	}
})();