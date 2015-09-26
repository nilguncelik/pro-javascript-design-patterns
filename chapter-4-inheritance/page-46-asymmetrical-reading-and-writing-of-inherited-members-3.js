/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* clone Function */

function clone(object) {
    function F() {}
    F.prototype = object;
    return new F();
}

// Best approach. Uses a method to create a new object, with the same structure and defaults as the original.

var CompoundObject = {};
CompoundObject.string1 = 'default value';
CompundObject.createChildObject = function() {
    return {
        bool: true,
        num: 10
    };
};
CompoundObject.createChildObject = CompundObject.createChildObject();


var compoundObjectClone = clone(CompundObject);
compoundObjectClone.createChildObject = CompundObject.createChildObject();
compoundObjectClone.createChildObject.num = 5;
