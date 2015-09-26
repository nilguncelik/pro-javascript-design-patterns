/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */

/* Describing interfaces with comments */

/*

interface Composite {
    function add(child);
    function remove(child);
    function getChild(index);
}

interface FormItem {
    function save();
}

*/

var CompositeForm = function(id, method, action) { // implements Composite, FormItem
    this.id = id;
    this.method = method;
    this.action = action;
    this.children = [];
};

/* Implement the Composite interface. */

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

/* Implement the FormItem interface. */
CompositeForm.prototype.save = function() {
    console.log('Saving CompositeForm');
};


// There is no checking to ensure that `CompositeForm` actually implement the correct set of methods. Only documentation and compliance is voluntary.
// Easy to implement, doesn't effect file size and execution speed.
