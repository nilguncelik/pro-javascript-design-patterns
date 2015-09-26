/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* augment function. */
function augment(receivingClass, givingClass) {
    for (methodName in givingClass.prototype) {
        if (!receivingClass.prototype[methodName]) {
            receivingClass.prototype[methodName] = givingClass.prototype[methodName];
        }
    }
}

/* Mixin class */

var Mixin = function() {};
Mixin.prototype = {
    serialize: function() {
        var output = [];
        for (key in this) {
            output.push(key + ': ' + this[key]);
        }
        return output.join(', ');
    }
};

/* Class Author */

function Author(name, books) {
    this.name = name;
    this.books = books;
}

augment(Author, Mixin);

var author = new Author('Ross Harmes', ['JavaScript Design Patters']);
var serializedString = author.serialize();

console.log(serializedString);
