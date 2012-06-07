TestCase("Chainable_constructor", sinon.testCase({
	setUp: function()
	{
		this.oChainable = new Chainable();
	},
	tearDown: function()
	{
		delete this.oChainable;
	},
	'test should check that oChainable is not undefined': function() {
		assertNotUndefined(this.oChainable);
		assertInstanceOf(Chainable, this.oChainable);
	},
	'test should return 0 for nNumber': function() {
		assertEquals(0, this.oChainable.nNumber);
	}
}));

TestCase("Chainable_add", sinon.testCase({
	setUp: function()
	{
		this.oChainable = new Chainable();
	},
	tearDown: function()
	{
		delete this.oChainable;
	},
	'test should return 5 if add is executed with 5 number as param': function() {
		this.oChainable.add(5);
		assertEquals(5, this.oChainable.nNumber);
	},
	'test should return 10 if add is executed with 10 number as param': function() {
		this.oChainable.add(10);
		assertEquals(10, this.oChainable.nNumber);
	},
	'test should return this.oChainable when add is executed': function() {
		var oInstance = this.oChainable.add(5);

		assertSame(this.oChainable, oInstance);
	},
	'test should check that add method allow to chain more than one call': function() {
		this.oChainable.add(5).add(5);

		assertEquals(10, this.oChainable.nNumber);
	}
}));

TestCase("Chainable_multiply", sinon.testCase({
	setUp: function()
	{
		this.oChainable = new Chainable();
		this.oChainable.nNumber = 1;
	},
	tearDown: function()
	{
		delete this.oChainable;
	},
	'test should return 5 if multiply is executed with 5 number as param': function() {
		this.oChainable.multiply(5);
		assertEquals(5, this.oChainable.nNumber);
	},
	'test should return 10 if multiply is executed with 10 number as param': function() {
		this.oChainable.multiply(10);
		assertEquals(10, this.oChainable.nNumber);
	},
	'test should return this.oChainable when multiply is executed': function() {
		var oInstance = this.oChainable.multiply(5);

		assertSame(this.oChainable, oInstance);
	},
	'test should check that multiply method allow to chain more than one call': function() {
		this.oChainable.multiply(5).multiply(5);

		assertEquals(25, this.oChainable.nNumber);
	}
}));

TestCase("Chainable_toString", sinon.testCase({
	setUp: function()
	{
		this.oChainable = new Chainable();
		this.oChainable.nNumber = 1;
	},
	tearDown: function()
	{
		delete this.oChainable;
	},
	'test should check that toString return nNumber as String': function() {
		var sValue = this.oChainable.toString();

		assertString(sValue);
	}
}));