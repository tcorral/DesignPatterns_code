TestCase("Singleton", sinon.testCase({
	setUp: function(){
		this.oSingleton = new Singleton();
	},
	tearDown: function(){
		delete this.oSingleton;
	},
	'test should check that oSingleton is not undefined': function()
	{
		assertNotUndefined(this.oSingleton);
	}
}));

TestCase("Singleton_toString", sinon.testCase({
	setUp: function(){
		this.oSingleton = new Singleton();
	},
	tearDown: function(){
		delete this.oSingleton;
	},
	'test should return "[object Singleton]" using global Singleton instance': function()
	{
		var sExpected = "[object Singleton]";

		assertEquals(sExpected, this.oSingleton.toString());
	},
	'test should return "[object Singleton]" using Singleton instance from Singleton.getInstance': function()
	{
		var sExpected = "[object Singleton]";
		var oSingleton = Singleton.getInstance();

		assertEquals(sExpected, oSingleton.toString());
	}
}));

TestCase("Singleton_getInstance", sinon.testCase({
	setUp: function(){
		this.oSingleton = new Singleton();
	},
	tearDown: function(){
		delete this.oSingleton;
	},
	'test should return the same instance that Singleton global instance': function()
	{
		var oSingleton = Singleton.getInstance();

		assertSame(this.oSingleton, oSingleton);
	},
	'test should return the same instance every time getInstance method is called': function()
	{
		var oSingleton = Singleton.getInstance();
		var oSingleton1 = Singleton.getInstance();

		assertSame(oSingleton, oSingleton1);
	}
}));