/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Declared Globally */

function findProduct(id) {
    // ...
}

// Later in your page another programmer adds...
var resetProduct = $('reset-product-button');
var findProduct = $('find-product-button'); // The findProduct function has just got overwritten.
