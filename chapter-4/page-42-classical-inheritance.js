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

var reader = new Person('John Smith');
console.log(reader.getName());
