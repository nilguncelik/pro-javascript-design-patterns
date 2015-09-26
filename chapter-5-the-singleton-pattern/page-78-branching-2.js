/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* SimpleXhrFactory singleton, step 1. */

var SimpleXhrFactory = (function() {
    // The three branches.
    var standart = {
        createXhrObject: function() {
            return newXMLHttpRequest();
        }
    };
    var activeXNew = {
        createXhrObject: function() {
            return new ActiveXObject('Msxml2.XMLHTTP');
        }
    };
    var activeXOld = {
        createXhrObject: function() {
            return new ActiveXObject('Microsoft.XMLHTTP');
        }
    };
})();


/* SimpleXhrFactory singleton, step 2. */

var SimpleXhrFactory = (function() {
    // The three branches.
    var standard = {
        createXhrObject: function() {
            return newXMLHttpRequest();
        }
    };
    var activeXNew = {
        createXhrObject: function() {
            return new ActiveXObject('Msxml2.XMLHTTP');
        }
    };
    var activeXOld = {
        createXhrObject: function() {
            return new ActiveXObject('Microsoft.XMLHTTP');
        }
    };

    // To assign the branch, try each method; return whatever doesn't fail.
    var testObject;
    try {
        testObject = standard.createXhrObject();
        return standard; // Return this if no error was thrown.
    } catch(e) {
        try {
            testObject = activeXNew.createXhrObject();
            return activeXNew; // Return this if no error was thrown.
        } catch(e) {
            try {
                testObject = activeXOld.createXhrObject();
                return activeXOld; // Return this if no error was thrown.
            } catch(e) {
                throw new Error('No XHR object found in this environment.');
            }
        }
    }
})();
// Note that feature sniffing code is executed only once ever, instead of once for each object that is instantiated.

// Usage:
// SimpleXhrFactory.createXhrObject();
