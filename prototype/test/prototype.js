TestCase('Constructor', sinon.testCase({
	setUp: function(){
		this.oConstructor = new Constructor();
	},
	tearDown: function(){
		delete this.oConstructor;
	},
	'test should check that test property is not accessible': function() {
		assertUndefined(this.oConstructor.test);
	},
	'test should check that name is accessible': function()	{
		var sExpected = 'constructor_object';

		assertEquals(sExpected, this.oConstructor.name);
	},
	'test should check that _getRandom is accessible': function() {
		assertFunction(this.oConstructor._getRandom);
	},
	'test should check that getIdentifier is accessible': function() {
		assertFunction(this.oConstructor.getIdentifier);
	}
}));

TestCase("Constructor_getIdentifier", sinon.testCase({
	setUp: function(){
		this.oConstructor = new Constructor();
		var sRandom = this.sRandom = 'test_';
		sinon.stub(Math, "random").returns(sRandom);
	},
	tearDown: function(){
		Math.random.restore();
		delete this.oConstructor;
	},
	'test should check that returns "test_constructor_name"': function()
	{
		var sExpected = this.sRandom + this.oConstructor.name;

		var sRetrieved = this.oConstructor.getIdentifier();

		assertEquals(sExpected, sRetrieved);
	}
}));

TestCase('CopyOfConstructor', sinon.testCase({
	setUp: function(){
		this.oConstructor = new CopyOfConstructor();
	},
	tearDown: function(){
		delete this.oConstructor;
	},
	'test should check that test property is not accessible': function() {
		assertUndefined(this.oConstructor.test);
	},
	'test should check that name is accessible': function()	{
		var sExpected = 'constructor_object';

		assertEquals(sExpected, this.oConstructor.name);
	},
	'test should check that _getRandom is accessible': function() {
		assertFunction(this.oConstructor._getRandom);
	},
	'test should check that getIdentifier is accessible': function() {
		assertFunction(this.oConstructor.getIdentifier);
	}
}));

TestCase("CopyOfConstructor_getIdentifier", sinon.testCase({
	setUp: function(){
		this.oConstructor = new CopyOfConstructor();
		var sRandom = this.sRandom = 'test_';
		sinon.stub(Math, "random").returns(sRandom);
	},
	tearDown: function(){
		Math.random.restore();
		delete this.oConstructor;
	},
	'test should check that returns "test_constructor_name"': function()
	{
		var sExpected = this.sRandom + this.oConstructor.name;

		var sRetrieved = this.oConstructor.getIdentifier();

		assertEquals(sExpected, sRetrieved);
	}
}));