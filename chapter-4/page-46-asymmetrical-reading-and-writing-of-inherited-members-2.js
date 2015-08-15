/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* clone Function */

function clone(object) {
	function F() {};
	F.prototype = object;
	return new F();
}


var CompoundObject = {
	string1: 'default value',
	childObject: {
		bool: true,
		num: 10
	}
}


var compoundObjectClone = clone(CompundObject);

// Bad! Changes the value of CompoundObject.childObject.num.
compoundObjectClone.childObject.num = 5;

// Better. Creates a new object, but compound must know the structure of that object, and the defaults. This makes CompoundObject and compoundObjectClone tighly coupled.

compundObjectClone.childObject = {
	bool: true,
	num: 5
}
