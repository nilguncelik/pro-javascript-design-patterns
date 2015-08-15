/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Anim class. */

var Anim = function(){

};
Anim.prototype.start = function(){
	console.log('Starting animation...');
};
Anim.prototype.stop = function(){
	console.log('Stopping animation...');
}


/* Run */
var myAnim = new Anim();
myAnim.start();
setTimeout(myAnim.stop, 1000);



// Allows you to create animation objects, which store state and have methods that act only on this internal state.
