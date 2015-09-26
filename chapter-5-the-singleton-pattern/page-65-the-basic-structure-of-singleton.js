/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* Basic Singleton */


var Singleton = {
    attribute1: true,
    attribute2: 10,

    method1: function() {

    },
    method2: function(arg) {

    }
};


// This singleton can be modified (by adding new fields or using delete keyword).
// This violates open/closed principle: classes should be open to extension but closed for modification.


Singleton.attribute1 = false;
var total = Singleton.attribute2 + 5;
var result = Singleton.method1();


// Traditional singleton definition: a class that can only be instantiated only once and is accessible through a well-known access point.
// Note that above definition is not an instantiable class.
