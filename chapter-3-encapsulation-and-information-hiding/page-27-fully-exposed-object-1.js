/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */

var Book = function(isbn, title, author) {
    if (isbn === undefined) throw new Error('Book constructor requires an isbn.');
    this.isbn = isbn;
    this.title = title || 'No title specified';
    this.author = author || 'No author specified';
};

Book.prototype.display = function() {
    console.log(this.isbn + ' ' + this.title + ' ' + this.author);
};

var theHobbit = new Book('0-395-07122-4', 'The Hobbit', 'J. R. R. Tolkien');
theHobbit.display();
