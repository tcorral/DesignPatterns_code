var Singleton = (function() {
	return {
		toString: function() {
			return "[object Singleton]";
		},
		getInstance: function() {
			return this;
		}
	};
}());