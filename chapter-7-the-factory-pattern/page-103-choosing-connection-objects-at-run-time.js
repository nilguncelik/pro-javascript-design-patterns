/*
* Code taken from "Pro JavaScript Design Patterns" book.
* http://jsdesignpatterns.com/
*/

/* XhrManager singleton */

var XhrManager = {
    createXhrHandler: function() {
        var xhr;
        if ( this.isOffline() ) {
            xhr = new OfflineHandler();
        } else if (this.isHighLatency()) {
            xhr = new QueuedHandler();
        } else {
            xhr = new SimpleHandler();
        }
        Interface.ensureImplements(xhr, AjaxHandler);
        return xhr;
    },
    isOffline: function() { // Do a quick request with SimipleHandler to see if it succeeds
        // ...
    },
    isHighLatency: function() { // Do a series of requests with SimipleHandler and time the responses. Best done once, as a branching function.

    }
};

var myHandler = XhrManager.createXhrHandler();
var callback = {
    success: function(responseText) { alert('Success: ' + responseText); },
    error: function(statusCode) { alert('Failure: ' + statusCode); }
};
myHandler.request('GET', 'script.php', callback);
