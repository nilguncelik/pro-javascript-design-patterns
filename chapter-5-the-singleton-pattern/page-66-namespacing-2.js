/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Using a namespace */

var MyNamespace = {
    findProduct: function(id) {
        // ...
    }
    // Other methods can go here as well.
};

// Later in your page another programmer adds...
var resetProduct = $('reset-product-button');
var findProduct = $('find-product-button'); // Nothing was overwritten.

// Namespaces can help document your code by allowing you to group like methods together.
