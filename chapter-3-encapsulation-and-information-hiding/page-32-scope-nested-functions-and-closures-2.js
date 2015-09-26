/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


function foo() {
    var a = 10;

    function bar() {
        a *= 2;
        return a;
    }

    return bar;
}

var baz = foo(); // baz is now a reference to function bar.
console.log(baz()); // 20.
console.log(baz()); // 40.
console.log(baz()); // 80.


var blat = foo(); // baz is another reference to bar.
console.log(blat()); // 20, because a new copy of a is used.
