/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Add a method to the Function object that can be used to declare methods. */

Function.prototype.method = function(name, fn) {
	this.prototype[name] = fn;
}

/* Anim class, with methods created using convenience method. */

var Anim = function() {

};
Anim.method('start', function() {
		console.log('Starting animation...');
});
Anim.method('stop', function() {
		console.log('Stopping animation...');
});


/* Run */
var myAnim = new Anim();
myAnim.start();
setTimeout(myAnim.stop, 1000);
