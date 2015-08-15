/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* An anonymous function, executed immediately */

(function() {
	var foo = 10;
	var bar = 2;
	console.log(foo * bar);
})();

// Defined and executed without ever being assigned to variable.


/* An anonymous function with arguments */

(function(foo,bar) {
	console.log(foo * bar);
})(10, 2);

// inner variables from previous example are passed as arguments instead.


var baz = (function(foo, bar) {
	return foo * bar;
})(10 ,2);

// Returning a value from IIFE.


/* An anonymous function used as a closure */

var baz2;

(function() {
	var foo = 10;
	var bar = 2;
	baz2 = function(){
		return foo * bar;
	};
})();
/* Run */
console.log(baz2());

// baz can access foo and bar, even though it is executed outside of the anonymous function.
