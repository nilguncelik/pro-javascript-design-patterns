/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Anim class, with a slightly different syntax for declaring methods. */

var Anim = function() {

};
Anim.prototype = {
    start: function() {
        console.log('Starting animation...');
    },
    stop: function() {
        console.log('Starting animation...');
    }
};


/* Run */
var myAnim = new Anim();
myAnim.start();
setTimeout(myAnim.stop, 1000);


// This style is more familiar to OO programmers as method declarations are nested within class declaration.
