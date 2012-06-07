function memoize ( fn ) {
	return function () {
		var aArgs = [].slice.call(arguments);
		fn.memoize = fn.memoize || {};
		return (aArgs in fn.memoize)?
			fn.memoize[aArgs] :
			fn.memoize[aArgs] = fn.apply(this, aArgs);
	}
}