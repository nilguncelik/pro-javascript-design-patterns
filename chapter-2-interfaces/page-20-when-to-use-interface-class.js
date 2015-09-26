/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */

/* Create Interface object for each API you rely on and then test each object you receive to ensure it implements those interfaces correctly */

var Interface = require('./Interface.js');

var DynamicMap = new Interface('DynamicMap', ['centerPoint', 'zoom', 'draw']);

function displayRoute(mapInstance) {
    Interface.ensureImplements(mapInstance, DynamicMap);
    mapInstance.centerOnPoint(12, 34);
    mapInstance.zoom(5);
    mapInstance.draw();
}


displayRoute({});
