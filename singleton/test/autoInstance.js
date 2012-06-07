TestCase("Singleton", sinon.testCase({
	setUp: function(){},
	tearDown: function(){},
	'test should check that Singleton is not undefined': function()
	{
		assertNotUndefined(Singleton);
	}
}));

TestCase("Singleton_toString", sinon.testCase({
	setUp: function(){},
	tearDown: function(){},
	'test should return "[object Singleton]" using global Singleton instance': function()
	{
		var sExpected = "[object Singleton]";

		assertEquals(sExpected, Singleton.toString());
	},
	'test should return "[object Singleton]" using Singleton instance from Singleton.getInstance': function()
	{
		var sExpected = "[object Singleton]";
		var oSingleton = Singleton.getInstance();

		assertEquals(sExpected, oSingleton.toString());
	}
}));

TestCase("Singleton_getInstance", sinon.testCase({
	setUp: function(){},
	tearDown: function(){},
	'test should return the same instance that Singleton global instance': function()
	{
		var oSingleton = Singleton.getInstance();

		assertSame(Singleton, oSingleton);
	},
	'test should return the same instance every time getInstance method is called': function()
	{
		var oSingleton = Singleton.getInstance();
		var oSingleton1 = Singleton.getInstance();

		assertSame(oSingleton, oSingleton1);
	}
}));