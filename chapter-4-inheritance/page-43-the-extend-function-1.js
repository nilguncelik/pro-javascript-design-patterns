/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Extend Function */

function extend(subClass, superClass) {
    var F = function() {};
    // empty class F is added to prototype chain in order to prevent a new (and possibly large) instance of superclass from having to be instantiated.
    F.prototype = superClass.prototype;
    subClass.prototype = new F(); // this is just a throw array instance.
    subClass.prototype.constructor = subClass;
}


/* Class Person */

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};

/* Class Author */

function Author(name, books) {
    Person.call(this, name); // Call superclass's constructor in the scope of this.
    this.books = books; // Add an attribute to Author.
}

extend(Author, Person);

Author.prototype.getBooks = function() {  // Add method to author.
    return this.books;
};


var author = [];
author[0] = new Author('Dustin Diaz', ['Javascript Design Patterns']);
author[1] = new Author('Ross Harmes', ['Javascript Design Patterns']);

console.log(author[1].getName());
console.log(author[1].getBooks()[0]);
