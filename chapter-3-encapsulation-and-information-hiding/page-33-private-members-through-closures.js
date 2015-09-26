/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


var Book = function(newIsbn, newTitle, newAuthor) {  // implements Publication

    // Private attributes.
    var isbn, title, author;

    // Private method.
    function checkIsbn(isbn) {
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
            if (isbn.charAt(9) != checksum) {
                return false;
            }
        } else {	// 13 digit ISBN.
            if (!isbn.match(/^\d{12}/)) { // Ensure characters 1 through 12 are digits.
                return false;
            }
            for (var i = 0; i < 12; i++) {
                sum += isbn.charAt(i) * ( (i % 2 === 0) ? 1 : 3 );
            }
            var checksum = sum % 10;
            if (isbn.charAt(12) !== checksum) {
                return false;
            }
        }

        return true; // All tests passed.
    }

    // Privileged methods.
    this.getIsbn = function() {
        return isbn;
    };
    this.setIsbn = function(newIsbn) {
        if (!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
        isbn = newIsbn;
    };
    this.getTitle = function() {
        return title;
    };
    this.setTitle = function(newTitle) {
        title = newTitle || 'No title specified.';
    };
    this.getAuthor = function() {
        return author;
    };
    this.setAuthor = function(newAuthor) {
        author = newAuthor || 'No author specified';
    };

    // Constructor Code
    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);
};

// Public, non-privileged methods.
Book.prototype = {
    display: function() {
        console.log( this.getIsbn() + ' ' + this.getTitle() + ' ' + this.getAuthor() );
    }
};


var theHobbit = new Book('0-395-07122-4', 'The Hobbit', 'J. R. R. Tolkien');
theHobbit.display();
