/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* augment function. */
function augment(receivingClass, givingClass){

	if(arguments[2]){
		for(var i = 2, len = arguments.length; i < len ;i++ ){
			if(!receivingClass.prototype[arguments[i]])
				receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
		}
	}
	else {
		for(methodName in givingClass.prototype){
			if(!receivingClass.prototype[methodName])
				receivingClass.prototype[methodName] = givingClass.prototype[methodName];
		}
	}

}


/* Mixin class */

var Mixin = function() {};
Mixin.prototype = {
	serialize: function(){
		var output = [];
		for(key in this){
			output.push(key + ': ' + this[key]);
		}
		return output.join(', ');
	}
}


/* Class Author */

function Author(name, books) {
	this.name = name;
	this.books = books;
}

augment(Author, Mixin, 'serialize');

var author = new Author('Ross Harmes', ['JavaScript Design Patters']);
var serializedString = author.serialize();

console.log(serializedString);
