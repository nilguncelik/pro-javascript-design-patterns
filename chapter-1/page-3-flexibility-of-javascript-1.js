/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Start and stop animations using functions. */

function startAnimation(){
	console.log('Starting animation...');
}


function stopAnimation(){
	console.log('Stopping animation...');
}


/* Run */
startAnimation();
setTimeout(stopAnimation, 1000);



// Simple approach.
// But does not allow you to create animation objects, which store state and have methods that act only on this internal state.
