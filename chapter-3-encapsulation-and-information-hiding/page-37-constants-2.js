/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


var Class = (function() {
    // Private static attributes.
    var constants = {
        UPPER_BOUND: 100,
        LOWER_BOUND: -100
    };

    // Privileged static method.
    this.getConstant = function(name) {
        return constants[name];
    };


    // Return the constructor.
    return function(constructorArgument) {

    };
})();


console.log(Class.getConstant('UPPER_BOUND'));
