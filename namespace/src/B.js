var App = {};

(function(global, ns) {
	var Ajax, DOM;

	Ajax = function() {
		console.log('Instance ajax class');
	};
	Ajax.call = function() {
		console.log('Executing ajax call');
	};

	DOM = {};
	DOM.byId = function(sId) {
		console.log('Id -' + sId);
	};

	ns.Ajax = Ajax;
	ns.DOM = DOM;

}(this, App));