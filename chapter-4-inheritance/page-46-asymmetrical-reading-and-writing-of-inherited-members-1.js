/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* clone Function */

function clone(object) {
    function F() {}
    F.prototype = object;
    return new F();
}


/* Person Prototype Object */

var Person = {
    name: 'default name',
    getName: function() {
        return this.name;
    }
};


/*  Author Prototype Object */

var Author = clone(Person);
Author.books = []; // Default value.
Author.getBooks = function() {
    return this.books;
};


var authorClone = clone(Author);
console.log(authorClone.name);  // Linked to the primative Person.name, which is the string 'default name'.
authorClone.name = 'new name';  // A new primative is created and added to the authorClone itself.
console.log(authorClone.name);  // Now linked to the primative authorClone.name, which is the string 'new name'.

authorClone.books.push('new book');  // authorClone.books is linked to the array Author.books. We just modified the prototype object's default value, and all other objects that link to it now have a new default value there.
authorClone.books = []; // A new array is created and added to the to the authorClone object itself.
authorClone.books.push('new book');  // We are now modifying that new array.

// You must create new copies of data types that are passed by reference.
