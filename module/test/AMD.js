TestCase('AMD_module', sinon.testCase({
	setUp: function(){},
	tearDown: function(){},
	'test should set MyModule as global': function() {
		assertNotUndefined(MyModule);
	},
	'test should check that MyModule.init is a function': function() {
		assertFunction(MyModule.init);
	},
	'test should check that MyModule.destroy is a function': function() {
		assertFunction(MyModule.destroy);
	}
}));