/*
* Code taken from "Pro JavaScript Design Patterns" book.
* http://jsdesignpatterns.com/
*/

addEvent(element, 'click', getBeerById);

function getBeerById(e) {
    var id = this.id;
    asyncRequest('GET', 'beer.uri?id=' + id, function(resp) {
        // Callback response.
        console.log('Requested Beer: ' + resp.reponseText);
    });
}

function getBeerById(id, callback) {
    // Make request for beer by ID, then return the beer data.
    asyncRequest('GET', 'beer.uri?id=' + id, function(resp) {
        // callback response
        callback(resp.reponseText);
    });
}

addEvet(element, 'click', getBeerByIdBridge);
function getBeerByIdBridge(e) {
    getBeerById(this.id, function(beer) {
        console.log('Requested Beer: ' + beer);
    });
}
