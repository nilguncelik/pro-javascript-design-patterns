/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */

var Interface = require('../chapter-2/Interface');


var Publication = new Interface('Publication', ['getIsbn', 'setIsbn', 'getTitle', 'setTitle', 'getAuthor', 'setAuthor', 'display']);

var Book = function(isbn, title, author) {	// Implements Publication
    this.setIsbn(isbn);
    this.setTitle(title);
    this.setAuthor(author);
};

Book.prototype = {
    checkIsbn: function(isbn) {
        if (isbn === undefined || typeof isbn !== 'string') {
            return false;
        }

        isbn = isbn.replace(/-/g, ''); // Remove dashes

        if (isbn.length !== 10 && isbn.length !== 13) {
            return false;
        }


        var sum = 0;
        if (isbn.length === 10) { // 10 digit ISBN.
            if (!isbn.match(/^\d{9}/)) { // Ensure characters 1 through 9 are digits.
                return false;
            }
            for (var i = 0; i < 9; i++) {
                sum += isbn.charAt(i) * (10 - i);
            }
            var checksum = 11 - (sum % 11);
            if (checksum === 10) checksum = 'X';
            if (isbn.charAt(9) !== checksum) {
                return false;
            }
        } else {	// 13 digit ISBN.
            if (!isbn.match(/^\d{12}/)) { // Ensure characters 1 through 12 are digits.
                return false;
            }
            for (var i = 0; i < 12; i++) {
                sum += isbn.charAt(i) * ( (i%2 === 0) ? 1 : 3 );
            }
            var checksum = sum % 10;
            if (isbn.charAt(12) !== checksum) {
                return false;
            }
        }

        return true; // All tests passed.
    },
    getIsbn: function() {
        return this.isbn;
    },
    setIsbn: function(isbn) {
        if (!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN.');
        this.isbn = isbn;
    },
    getTitle: function() {
        return this.title;
    },
    setTitle: function(title) {
        this.title = title || 'No title specified';
    },
    getAuthor: function() {
        return this.author;
    },
    setAuthor: function(author) {
        this.author = author || 'No author specified';
    },
    display: function() {
        console.log(this.isbn + ' ' + this.title + ' ' + this.author);
    }
};

var theHobbit = new Book('0-395-07122-4', 'The Hobbit', 'J. R. R. Tolkien');
theHobbit.display();
theHobbit.setIsbn('978-0261103283');
theHobbit.display();

// still developers can set isbn directly, but this time it is probably intentional : theHobbit._isbn = '978-0261103283';
