var Constructor = function() {
	var test = 'test';
	this.name = 'constructor_object';
	function _getRandom() {
		return Math.random();
	}
	this.getIdentifier = function() {
		return _getRandom() + this.name;
	};
}