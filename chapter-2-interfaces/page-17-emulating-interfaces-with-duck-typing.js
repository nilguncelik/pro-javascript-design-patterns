/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */

/* Emulating Interfaces with Duck Typing */

var Interface = require('./Interface.js');


// Interfaces

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);

// CompositeForm class

var CompositeForm = function(id, method, action) {
    this.id = id;
    this.method = method;
    this.action = action;
};

CompositeForm.prototype.add = function(child) {
    this.children.push(child);
};
CompositeForm.prototype.remove = function(child) {
    var index = this.children.indexOf(child);
    if (index >= 0) {
        this.children.slice(index, 1);
    }
};
CompositeForm.prototype.getChild = function(i) {
    return this.children[i];
};

CompositeForm.prototype.save = function() {
    console.log('Saving CompositeForm');
};

function addForm(formInstance) {
    Interface.ensureImplements(formInstance, Composite, FormItem);
    // This function will throw an error if a required method is not implemented.

    console.log('addForm now knows that `formInterface` actually implements the `Composite` and `FormItem` interfaces. It can safely call methods of these interfaces on the object.');
    formInstance.save();
}


/* Run */
var compositeForm = new CompositeForm('login', 'POST', 'authenticate');
addForm(compositeForm);
