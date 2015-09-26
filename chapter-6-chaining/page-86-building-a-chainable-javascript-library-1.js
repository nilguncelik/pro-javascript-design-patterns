/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


 // Include syntactic sugar to help the development of our interface.
Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};

(function() {
    function _$(els) {
        // ...
    }
    /*
     Events
      * addEvent
      * getEvent
    */
    _$.method('addEvent', function(type, fn) {
        // ...
    }).method('getEvent', function(e) {
        // ...
    }).
    /*
     DOM
      * addClass
      * removeClass
      * replaceClass
      * hasClass
      * getStyle
      * setStyle
     */
    method('addClass', function(className) {
         // ...
    }).
    method('removeClass', function(className) {
        // ...
    }).
    method('replaceClass', function(oldClass, newClass) {
        // ...
    }).
    method('hasClass', function(className) {
        // ...
    }).
    method('getStyle', function(prop) {
        // ...
    }).
    method('setStyle', function(prop, val) {
        // ...
    }).
    /*
     AJAX
      * load. Fetches an HTML fragment from a URL and inserts it into an element.
     */
    method('load', function(uri, method) {
         // ...
    });
    window.$ = function() {
        return new _$(arguments);
    };
})();
