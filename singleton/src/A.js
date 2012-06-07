var Singleton = {
	toString: function() {
		return '[object Singleton]';
	},
	getInstance: function() {
		return this;
	}
};