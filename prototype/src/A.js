var Constructor = function() {
	var test = 'test';
	this.name = 'constructor_object';
};
Constructor.prototype._getRandom = function() {
	return Math.random();
};
Constructor.prototype.getIdentifier = function() {
	return this._getRandom() + this.name;
};

var CopyOfConstructor = function() {
	Constructor.apply(this);
};
CopyOfConstructor.prototype = new Constructor();