function func(a) {
	return function(b) {
		return a + b;
	};
}
console.log( func(3)(2) );