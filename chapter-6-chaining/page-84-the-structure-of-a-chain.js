/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */

 /* Dollar function. Returns an HTML element or a collection of HTML elements based on ids provided as arguments. */

function $() {
    var elements = [];
    for (var i = 0, len = arguments.length; i < len; ++i) {
        var element = arguments[i];
        if (typeof element === 'string') {
            element = document.getElementById(element);
        }
        if ( arguments.length === 1) {
            return element;
        }
        elements.push(element);
    }
    return elements;
}


 /* Giving ability to chain to Dollar function */

(function() {
    // User a private class.
    function _$(els) {
        this.elements = [];
        for (var i = 0, len = els.length; i < len; ++i) {
            var element = els[i];
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            this.elements.push(element);
        }
    }
    _$.prototype = {
        each: function(fn) {
            for (var i = 0, len = this.elements.length; i < len; ++i) {
                fn.call(this, this.elements[i]);
            }
            return this;
        },
        setStyle: function(prop, val) {
            this.each(function(el) {
                el.style[prop] = val;
            });
            return this;
        },
        show: function() {
            var that = this;
            this.each(function(el) {
                that.setStyle('display', 'block');
            });
            return this;
        },
        addEvent: function(type, fn) {
            var add = function(el) {
                if (window.addEventListener) {
                    el.addEventListener(type, fn, false);
                } else if (window.attachEvent) {
                    el.attachEvent('on' + type, fn);
                }
            };
            this.each(function(el) {
                add(el);
            });
            return this;
        }
    };
    // The public interface remains the same.
    window.$ = function() {
        return new _$(arguments);
    };
})();
