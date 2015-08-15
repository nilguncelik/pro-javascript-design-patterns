/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


var Class = (function() {

	// Constants (created as private static attributes).
	var UPPER_BOUND = 100;


	// Privileged static method.
	this.getUPPER_BOUND = function() {
		return UPPER_BOUND;
	}


	// Return the constructor.
	return function(constructorArgument){

	}
})();

console.log(Class.getUPPER_BOUND());
