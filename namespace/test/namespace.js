TestCase("Namespace_App", sinon.testCase({
	setUp: function(){},
	tearDown: function(){},
	'test should check that App namespace exist': function() {
		assertNotUndefined(App);
		assertNotUndefined(window.App);
	}
}));

TestCase("Namespace_Ajax", sinon.testCase({
	setUp: function(){},
	tearDown: function(){},
	'test should check that Ajax does not pollute globals': function() {
		assertException(function() {
			assertUndefined(Ajax);
		});
	},
	'test should check that Ajax is member of App namespace': function() {
		assertNotUndefined(App.Ajax);
	}
}));

TestCase("Namespace_DOM", sinon.testCase({
	setUp: function(){},
	tearDown: function(){},
	'test should check that DOM does not pollute globals': function() {
		assertException(function() {
			assertUndefined(DOM);
		});
	},
	'test should check that Ajax is member of App namespace': function()
	{
		assertNotUndefined(App.DOM);
	}
}));