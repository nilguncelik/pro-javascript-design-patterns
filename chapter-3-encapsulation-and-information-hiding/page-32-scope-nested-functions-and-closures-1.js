/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


function foo() {
    var a = 10;

    function bar() {
        a *= 2;
    }

    bar();
    return a;
}

console.log(foo()); // 20
