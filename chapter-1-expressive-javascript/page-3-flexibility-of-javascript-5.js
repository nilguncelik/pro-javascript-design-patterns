/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* This version allows the calls to be chained. */

Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};

/* Anim class, with methods created using convenience method and chaining. */

var Anim = function() {

};
Anim.
    method('start', function() {
        console.log('Starting animation...');
    }).
    method('stop', function() {
        console.log('Stopping animation...');
    });


/* Run */
var myAnim = new Anim();
myAnim.start();
setTimeout(myAnim.stop, 1000);


// Note to self: on line 10, `this` will refer to `Anim` function or whatever function on which the 'method' function is invoked.
