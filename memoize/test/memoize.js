TestCase("Memoize", sinon.testCase({
	setUp: function(){},
	tearDown: function(){},
	factorial: function factorial(nNumber)
	{
		if (nNumber === 0 || nNumber === 1) {
			return 1;
		}
		else {
			return nNumber * factorial(nNumber - 1);
		}
	},
	'test should return a new function when memoize is executed': function()
	{
		var fpMemoizeFunction = memoize(this.factorial);

		assertFunction(fpMemoizeFunction);
	}
}));

TestCase("Memoization", {

	setUp: function(){
		this.memoizedFactorial = memoize(this.factorial);
	},
	tearDown: function(){},
	factorial: function factorial(nNumber)
	{
		if (nNumber === 0 || nNumber === 1) {
			return 1;
		}
		else {
			return nNumber * factorial(nNumber - 1);
		}
	},
	'test should execute faster the second time is executed': function()
	{
		var nFirstExecutionStart,
			nFirstExecutionEnd,
			nSumFirstTime = 0,
			nSecondExecutionStart,
			nSecondExecutionEnd,
			nSumSecondTime = 0,
			nNumber = 200,
			nTimes = 10000;

		this.memoizedFactorial(nNumber);

		while (nTimes--) {
			this.factorial.memoize[nNumber] = null;

			nFirstExecutionStart = new Date();
			this.memoizedFactorial(nNumber);
			nFirstExecutionEnd = new Date();
			nSumFirstTime += (nFirstExecutionEnd - nFirstExecutionStart);

			nSecondExecutionStart = new Date();
			this.memoizedFactorial(nNumber);
			nSecondExecutionEnd = new Date();
			nSumSecondTime += (nSecondExecutionEnd - nSecondExecutionStart);
		}

		assertTrue(nSumSecondTime <= nSumFirstTime);
	}
});