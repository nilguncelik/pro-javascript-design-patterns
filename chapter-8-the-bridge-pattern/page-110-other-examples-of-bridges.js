/*
* Code taken from "Pro JavaScript Design Patterns" book.
* http://jsdesignpatterns.com/
*/


// In case you have a public interface that abstracts more complicated tasks that would perhaps be private (although being private isn't entirely necessary for this case), a bridge can be used to gather some of that private information.

var Public = function() {
    var secret = 3;
    this.priviledgedGetter = function() {
        return secret;
    };
};

var o = new Public();
var data = o.priviledgedGetter();
