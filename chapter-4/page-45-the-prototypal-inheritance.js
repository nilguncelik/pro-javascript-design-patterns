/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* clone Function */

function clone(object) {
	function F() {};
	F.prototype = object;
	return new F();
}


/* Person Prototype Object */

// This is the prototype object for any other Person-like objects that you want to create.
var Person = {
	name: 'default name',
	getName: function(){
		return this.name;
	}
};

// Creating Person instance
var reader = clone(Person);
console.log(reader.getName()),  // 'default name'
reader.name = 'John Smith';
console.log(reader.getName());  // 'John Smith'


/*  Author Prototype Object */
// This is the prototype object for any other Author-like objects that you want to create.

var Author = clone(Person);
Author.books = []; // Default value.
Author.getBooks = function() {
	return this.books;
}

var author = [];

author[0] = clone(Author);
author[0].name = 'Dustin Diaz';
author[0].books = ['Javascript Design Patterns'];

author[1] = clone(Author);
author[1].name = 'Ross Harmes';
author[1].books = ['Javascript Design Patterns'];

console.log(author[1].getName());
console.log(author[1].getBooks().join(', '));
