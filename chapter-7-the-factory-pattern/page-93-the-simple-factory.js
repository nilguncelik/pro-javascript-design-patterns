/*
* Code taken from "Pro JavaScript Design Patterns" book.
* http://jsdesignpatterns.com/
*/

/* BicycleShop class. */

var BicycleShop = function() {};
BicycleShop.prototype = {
    sellBicycle: function(model) {
        var bicycle;

        switch (model) {
        case 'The Speedster':
            bicycle = new Speedster();
            break;
        case 'The Lowrider':
            bicycle = new Lowrider();
            break;
        case 'The Comfort Cruiser':
        default:
            bicycle = new ComfortCruiser();
        }
        Interface.ensureImplements(bicycle, Bicycle);

        bicycle.assemble();
        bicycle.wash();

        return bicycle;
    }
};

/* The Bicycle Interface */
var Bicycle = new Interface('Bicycle', ['assemble', 'wash', 'ride', 'repair']);

/* Speedster class. */
var Speedster = function() { // implements Bicycle
    // ...
};
Speedster.prototype = {
    assemble: function() {
        // ...
    },
    wash: function() {
        // ...
    },
    ride: function() {
        // ...
    },
    repair: function() {
        // ...
    }
};


// To sell a certain model of bike, call the sellBicycle method:

var californiaCruisers = new BicycleShop();
var yourNewBike = californiaCruisers.sellBicycle('The Speedster');


BicycleFactory = {
    createBicycle: function(model) {
        var bicycle;

        switch (model) {
        case 'The Speedster':
            bicycle = new Speedster();
            break;
        case 'The Lowrider':
            bicycle = new Lowrider();
            break;
        case 'The Comfort Cruiser':
        default:
            bicycle = new ComfortCruiser();
        }
        Interface.ensureImplements(bicycle, Bicycle);
        return bicycle;
    }
};

/* BicycleShop class, improved */

var BicycleShop = function() {};
BicycleShop.prototype = {
    sellBicycle: function(model) {
        var bicycle = BicycleFactory.createBicycle(model);

        bicycle.assemble();
        bicycle.wash();

        return bicycle;
    }
};

/* BicycleFactory namespace, with more models. */
BicycleFactory = {
    createBicycle: function(model) {
        var bicycle;

        switch (model) {
        case 'The Speedster':
            bicycle = new Speedster();
            break;
        case 'The Lowrider':
            bicycle = new Lowrider();
            break;
        case 'Flatlander':
            bicycle = new Flatlander();
            break;
        case 'The Comfort Cruiser':
        default:
            bicycle = new ComfortCruiser();
        }
        Interface.ensureImplements(bicycle, Bicycle);
        return bicycle;
    }
};
