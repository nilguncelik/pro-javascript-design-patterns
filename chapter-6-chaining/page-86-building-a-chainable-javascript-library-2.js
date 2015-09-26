/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


Function.prototype.method = function(name, fn) {
    // ..
};
(function() {
    function _$(els) {
        // ...
    }
    _$.method('addEvent', function(type, fn) {
        // ...
    });

    window.installHelper = function(scope, _interface) {
        scope[_interface] = function() {
            return new _$(arguments);
        };
    };
})();

// Usage
// window.installHelper(window, '$');
// $('example').show();

window.com = window.com || {};
com.example = com.example || {};
com.example.util = com.example.util || {};

installHelper(com.example.util, 'get');
(function() {
    var get = com.example.util.get;
    get('example').addEvent('click', function(e) {
        get(this).addClass('hello');
    });
})();
