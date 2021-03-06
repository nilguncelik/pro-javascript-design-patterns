/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Singleton as an Object Literal. */

MyNamespace.Singleton = {};

/* Singleton with Private Members, step 1. */

MyNamespace.Singleton = function() {
    return {};
}();


/* Singleton with Private Members, step 1. */

MyNamespace.Singleton = (function() {
    return {};
})();


/* Singleton with Private Members, step 2. */

MyNamespace.Singleton = (function() {
    return { // Public members.
        publicAttribute1: true,
        publicAttribute2: 10,

        publicMethod1: function() {
        },
        publicMethod2: function(args) {
        }
    };
})();


/* Singleton with Private Members, step 3. */

MyNamespace.Singleton = (function() {
    // Private members.
    var privateAttribute1 = false;
    var privateAttribute2 = [1, 2, 3];

    function privateMethod1() {
    }

    function privateMethod2(args) {
    }

    return { // Public members.
        publicAttribute1: true,
        publicAttribute2: 10,

        publicMethod1: function() {
        },
        publicMethod2: function(args) {
        }
    };
})();

// This particular pattern is known as the module pattern, referring to the fact that it modularizes and namespaces a set of related methods and attributes.
