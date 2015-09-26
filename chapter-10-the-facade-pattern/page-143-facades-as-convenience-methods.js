/*
* Code taken from "Pro JavaScript Design Patterns" book.
* http://jsdesignpatterns.com/
*/

function a(x) {
    // do stuff here...
}
function b(y) {
    // do stuff here...
}
function ab(x, y) {
    a(x);
    b(y);
}


var DED = window.DED || {};
DED.util = {
    stopPropagation: function(e) {
        if (e.stopPropagation) {
            // W3 interface
            e.stopPropagation();
        } else {
            // IE interface
            e.cancelBubble = true;
        }
    },
    preventDefault: function(e) {
        if (e.preventDefault) {
            // W3 interface
            e.preventDefault();
        } else {
            // IE interface
            e.returnValue = false;
        }
    },
    /* our convenience method */
    stopEvent: function(e) {
        DED.util.stopPropagation(e);
        DED.util.preventDefault(e);
    }
};
