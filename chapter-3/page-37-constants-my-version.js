/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


var Class = (function() {

	// Private static attributes.
	var constants = {
		UPPER_BOUND: 100,
		LOWER_BOUND: -100
	}

	// Return the constructor.
	var constructor = function(constructorArgument){

	};

	constructor.getConstant = function(name) {
		return constants[name];
	}

	return constructor;

})();


console.log(Class.getConstant('UPPER_BOUND'));
