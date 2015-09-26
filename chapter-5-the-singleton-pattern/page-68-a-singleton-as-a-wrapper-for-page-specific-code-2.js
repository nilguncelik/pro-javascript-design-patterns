/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


/* RegPage singleton, page handler object. */


// If GiantCorp doesnt exist, provide a default value.
var GiantCorp = window.GiantCorp || {};

GiantCorp.RegPage = {

    // Constants.
    FORM_ID: 'reg-form',
    OUTPUT_ID: 'reg-results',

    // Form handling methods.
    handleSubmit: function(e) {
        e.preventDefault(); // Stop the form submission.

        var data = {};
        var inputs = GiantCorp.RegPage.formEl.getElementsByTagName('input');

        // Collect the values of input fields in the form.
        for ( var i = 0, len = inputs.length; i < len; i++ ) {
            data[inputs[i].name] = inputs[i].value;
        }

        // Send the form values back to the server.
        GiantCorp.RegPage.sendRegistration(data);
    },

    sendRegistration: function(data) {
        // Make an XHR request and call displayResult() when the response is received.
    },

    displayResult: function(response) {
        // Output the response directly to the output element. We are assuming the server will send back formatted HTML.
        GiantCorp.RegPage.outputEl.innerHTML = response;
    },

    // Initialization method
    init: function() {
        // Get the form and output elements.
        GiantCorp.RegPage.formEl = $(GiantCorp.RegPage.FORM_ID);
        GiantCorp.RegPage.outputEl = $(GiantCorp.RegPage.OUTPUT_ID);

        // Hijack the form submission.
        addEvent( GiantCorp.RegPage.formEl, 'submit', GiantCorp.RegPage.handleSubmit);
    }
};

// Invoke the initialization event after the page loads
addLoadEvent(GiantCrop.RegPage.init);
