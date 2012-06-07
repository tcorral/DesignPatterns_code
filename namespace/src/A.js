var App = {};
App.Ajax = function() {
	console.log('Instance ajax class');
};
App.Ajax.call = function() {
	console.log('Executing ajax call');
};

App.DOM = {};
App.DOM.byId = function(sId) {
	console.log('Id -' + sId);
};