/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* DataParser singleton, converts character delimited strings into arrays. */

GiantCorp.DataParser = {
    // Private methods.
    _stripWhiteSpace: function(str) {
        return str.replace(/\s+/, '');
    },
    _stringSplit: function(str, delimiter) {
        return str.split(delimiter);
    },

    // Public method.
    stringToArray: function(str, delimiter, stripWS) {
        if (stripWS) {
            str = this._stripWhiteSpace(str);
        }
        var outputArray = this._stringSplit(str, delimiter);
        // note: It is safer to access other members within the singleton by using the full name, GiantCorp.DataParser

        return outputArray;
    }

}
