/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */

/* Class Person */

function Person(name){
	this.name = name;
}

Person.prototype.getName = function(){
	return this.name;
}

/* Class Author */

function Author(name, books) {
	Person.call(this, name); // Call superclass's constructor in the scope of this.
	this.books = books; // Add an attribute to Author.
}

Author.prototype = new Person(); // Set up the prototype chain.
Author.prototype.constuctor = Author;  // Set the constructor attribute to Author. (because previous line wipes out the constructor attribute)

Author.prototype.getBooks = function() {  // Add method to author.
	return this.books;
}


var author = [];
author[0] = new Author('Dustin Diaz', ['Javascript Design Patterns']);
author[1] = new Author('Ross Harmes', ['Javascript Design Patterns']);

console.log(author[1].getName());
console.log(author[1].getBooks()[0]);
