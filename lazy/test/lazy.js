TestCase("Lazy_constructor", sinon.testCase({
	setUp: function() {
		this.oLazy = null;
		this.oDate = new Date();
		this.sText = 'Test';
		sinon.stub(Lazy.prototype, "update");
	},
	tearDown: function() {
		Lazy.prototype.update.restore();
		delete this.oDate;
		delete this.sText;
		delete this.oLazy;
	},
	'test should check that Lazy is not undefined': function() {
		this.oLazy = new Lazy(document.body, this.sText, this.oDate);

		assertNotUndefined(this.oLazy);
	},
	'test should return document.body as oContainer': function() {
		this.oLazy = new Lazy(document.body, this.sText, this.oDate);

		assertSame(document.body, this.oLazy.oContainer);
	},
	'test should execute update method one time': function()
	{
		this.oLazy = new Lazy(document.body, this.sText, this.oDate);

		assertEquals(1, Lazy.prototype.update.callCount);
	},
	'test should check that update method is execute receiving "Test" and oDate as params': function() {
		this.oLazy = new Lazy(document.body, this.sText, this.oDate);

		assertEquals(1, Lazy.prototype.update.callCount);
		assertSame(this.sText, Lazy.prototype.update.getCall(0).args[0]);
		assertSame(this.oDate, Lazy.prototype.update.getCall(0).args[1]);
	}
}));

TestCase("Lazy_addZero", sinon.testCase({
	setUp: function() {
		this.oDate = new Date();
		this.sText = 'Test';
		this.oLazy = new Lazy(document.body, this.sText, this.oDate);
		sinon.stub(Lazy.prototype, "update");
	},
	tearDown: function() {
		Lazy.prototype.update.restore();
		delete this.oDate;
		delete this.sText;
		delete this.oLazy;
	},
	'test should check that addZero returns the same number if is greater than 10: using 10': function() {
		var nNumber = 10;

		assertEquals(nNumber, this.oLazy.addZero(nNumber));
	},
	'test should check that addZero returns the same number if is greater than 10: using 20': function() {
		var nNumber = 20;

		assertEquals(nNumber, this.oLazy.addZero(nNumber));
	},
	'test should check that addZero returns a string with a prefixed "0" if the number we pass as param is lower than 10: using 9': function() {
		var nNumber = 9;

		var sValue = this.oLazy.addZero(nNumber);

		assertString(sValue);
		assertEquals('09', sValue);
	},
	'test should check that addZero returns a string with a prefixed "0" if the number we pass as param is lower than 10: using 2': function() {
		var nNumber = 2;

		var sValue = this.oLazy.addZero(nNumber);

		assertString(sValue);
		assertEquals('02', sValue);
	}
}));

TestCase("Lazy_getFormattedTime", sinon.testCase({
	setUp: function() {
		this.oDate = new Date();
		this.sText = 'Test';
		this.oLazy = new Lazy(document.body, this.sText, this.oDate);
	},
	tearDown: function() {
		delete this.oDate;
		delete this.sText;
		delete this.oLazy;
	},
	'test should return "01:00:00" as formatted time': function() {
		var sExpected = '01:00:00';

		var sFormattedTime = this.oLazy.getFormattedTime(this.oDate);

		assertEquals(sExpected, sFormattedTime);
	}
}));

TestCase("Lazy_update", {
	setUp: function() {
		this.oDate = new Date();
		this.nCharsInUpdate = Lazy.prototype.update.toString().length;
		this.sText = 'Test';
	},
	tearDown: function() {
		delete this.oDate;
		delete this.sText;
		delete this.oLazy;
	},
	helperLoopFirstExecution: function(sText, dTime, nTimes) {
		while (nTimes--) {
			this.oLazy = new Lazy(document.body, this.sText, this.oDate);
		}
	},
	helperLoopSecondExecution: function(sText, dTime, nTimes) {
		while (nTimes--) {
			this.oLazy.oContainer = document.body;
			this.oLazy.update(this.sText, this.oDate);
		}
	},
	'test should overwrite update callback when is executed the first time': function() {
		this.oLazy = new Lazy(document.body, this.sText, this.oDate);

		assertTrue(this.nCharsInUpdate > this.oLazy.update.toString().length);
	},
	'test should expend more time the first time update is executed than next': function() {
		var nFirstExecutionStart,
			nFirstExecutionEnd,
			nTimeFirstExecution,
			nSecondExecutionStart,
			nSecondExecutionEnd,
			nTimeSecondExecution,
			nTimes = 100;

		nFirstExecutionStart = new Date();
		this.helperLoopFirstExecution(this.sText, this.oDate, nTimes);
		nFirstExecutionEnd = new Date();
		nTimeFirstExecution = nFirstExecutionEnd - nFirstExecutionStart;

		nSecondExecutionStart = new Date();
		this.helperLoopSecondExecution(this.sText, this.oDate, nTimes);
		nSecondExecutionEnd = new Date();
		nTimeSecondExecution = nSecondExecutionStart - nSecondExecutionEnd;

		assertTrue(nTimeSecondExecution < nTimeFirstExecution);
	}
});