/*
* Code taken from "Pro JavaScript Design Patterns" book.
* http://jsdesignpatterns.com/
*/

/* BicycleShop class (abstract) */

var BicycleShop = function() {};
BicycleShop.prototype = {
    sellBicycle: function(model) {
        var bicycle = this.createBicycle(model);

        bicycle.assemble();
        bicycle.wash();

        return bicycle;
    },
    createBicycle: function() {
        throw new Error('Unsupported operation on an abstract class.');
    }
};

/* AcmeBicycleShop class. */

var AcmeBicycleShop = function() {};
extend(AcmeBicycleShop, BicycleShop);
AcmeBicycleShop.prototype.createBicycle = function() {
    var bicycle;

    switch (model) {
    case 'The Speedster':
        bicycle = new AcmeSpeedster();
        break;
    case 'The Lowrider':
        bicycle = new AcmeLowrider();
        break;
    case 'Flatlander':
        bicycle = new AcmeFlatlander();
        break;
    case 'The Comfort Cruiser':
    default:
        bicycle = new AcmeComfortCruiser();
    }
    Interface.ensureImplements(bicycle, Bicycle);
    return bicycle;
};

/* GeneralProductsBicycleShop class. */

var GeneralProductsBicycleShop = function() {};
extend(GeneralProductsBicycleShop, BicycleShop);
GeneralProductsBicycleShop.prototype.createBicycle = function() {
    var bicycle;

    switch (model) {
    case 'The Speedster':
        bicycle = new GeneralProductsSpeedster();
        break;
    case 'The Lowrider':
        bicycle = new GeneralProductsLowrider();
        break;
    case 'Flatlander':
        bicycle = new GeneralProductsFlatlander();
        break;
    case 'The Comfort Cruiser':
    default:
        bicycle = new GeneralProductsComfortCruiser();
    }
    Interface.ensureImplements(bicycle, Bicycle);
    return bicycle;
};


// Usage
var alecsCruisers = new AcmeBicycleShop();
var yourNewBike = alecsCruisers.sellBicycle('The Lowrider');


var bobsCruisers = new GeneralProductsBicycleShop();
var yourSecondNewBike = bobsCruisers.sellBicycle('The Lowrider');
