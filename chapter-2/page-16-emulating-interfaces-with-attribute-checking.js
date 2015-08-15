/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */

/* Emulating Interfaces with Attribute Checking */

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

var CompositeForm = function(id, method, action) {
	this.implementsInterfaces = ['Composite', 'FormItem'];
	this.id = id;
	this.method = method;
	this.action = action;
}

CompositeForm.prototype.add = function(child) {
	this.children.push(child);
};
CompositeForm.prototype.remove = function(child) {
	var index = this.children.indexOf(child);
	if(index >= 0)
		this.children.slice(index, 1);
};
CompositeForm.prototype.getChild = function(index) {
	return this.children[i];
};

CompositeForm.prototype.save = function() {
	console.log("Saving CompositeForm");
};

function addForm(formInstance) {
	if(!implements(formInstance, 'Composite', 'FormItem')){
		throw new Error("Object does not implement a required interface.");
	}

	console.log("addForm now knows that `formInterface` variable says it implements the `Composite` and `FormItem` interfaces.");
	formInstance.save();
}

/* Run */
var compositeForm = new CompositeForm("login","POST","authenticate");
addForm(compositeForm);


// the implements function, which checks to see if an object declares that it implements the required interfaces.

function implements(object) {
	for(var i = 1; i < arguments.length; i++) { // loop through all arguments after the first one

		var interfaceName = arguments[i];
		var interfaceFound = false;
		for(var j = 0; j < object.implementsInterfaces.length; j++){
			if(object.implementsInterfaces[j] == interfaceName){
				interfaceFound = true;
				break;
			}
		}
		if(!interfaceFound) {
			return false; // An interface was not found.
		}
	}
	return true; // All interfaces are found.
}

// You are not reaaly ensuring that the class really does implement the interface. You only know it says it implements it.
