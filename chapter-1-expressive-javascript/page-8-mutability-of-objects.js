/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Giving attributes to functions */

function displayError(message) {
    displayError.numTimesExecuted++;
    alert(message);
}
displayError.numTimesExecuted = 0;


/* Class Person */

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    getName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    }
};

/* Instatitate the class. */

var alice = new Person('Alice', 93);
var bill = new Person('Bill', 30);

/* Modify the class */

Person.prototype.getGreeting = function() {
    return 'Hi ' + this.getName() + '!';
};


/* Modify specific instance */

alice.displayGreeting = function() {
    console.log(this.getGreeting());
};


/* Run */
alice.displayGreeting();


// Classes can be modified after they are defined and objects can be modified after they are instantiated.
