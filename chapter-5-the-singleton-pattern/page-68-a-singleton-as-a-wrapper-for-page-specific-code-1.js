/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Generic Page Object. */

Namespace.PageName = {

    // Page constants.
    CONSTANT_1: true,
    CONSTANT_2: 10,

    // Page methods.
    method1: function() {

    },
    method2: function() {

    },

    // Initialization method.
    init: function() {

    }
};

// Invoke the initialization method after page loads.
addLoadEvent(NameSpace.PageName.init);
