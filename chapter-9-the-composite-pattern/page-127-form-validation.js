/*
* Code taken from "Pro JavaScript Design Patterns" book.
* http://jsdesignpatterns.com/
*/

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save', 'restore']);

var CompositeForm = function(id, method, action) { // implements Composite, FormItem
    this.formComponents = [];

    this.element = document.createElement('form');
    this.element.id = id;
    this.element.method = method || 'POST';
    this.element.action = action || '#';
};

CompositeForm.prototype.add = function(child) {
    Interface.ensureImplements(child, Composite, FormItem);
    this.formComponents.push(child);
    this.element.appendChild(child.getElement());
};

CompositeForm.prototype.remove = function(child) {
    for (var i = 0, len = this.formComponents.length; i < len; i++) {
        if (this.formComponents[i] === child) {
            this.formComponents.splice(0, 1); // Remove one element from the array at position i.
            break;
        }
    }
};
CompositeForm.prototype.getChild = function(i) {
    return this.formComponents[i];
};
CompositeForm.prototype.save = function(i) {
    for (var i = 0, len = this.formComponents.length; i < len; i++) {
        this.formComponents[i].save();
    }
};
CompositeForm.prototype.getElement = function(i) {
    return this.element;
};
CompositeForm.prototype.restore = function(i) {
    for (var i = 0, len = this.formComponents.length; i < len; i++) {
        this.formComponents[i].restore();
    }
};

var Field = function(id) { // implements Composite, FormItem
    this.id = id;
    this.element;
};

Field.prototype.add = function() {};
Field.prototype.remove = function() {};
Field.prototype.getChild = function() {};

Field.prototype.save = function() {
    setCookie(this.id, this.getValue);
};
Field.prototype.getElement = function() {
    return this.element;
};
Field.prototype.getValue = function() {
    throw new Error('Unsupported operation on the class Field.');
};
Field.prototype.restore = function() {
    this.element.value = getCookie(this.id);
};

var InputField = function(id, label) { // implements Composite, FormItem
    Field.call(this, id);

    this.input = document.createElement('input');
    this.input.id = id;

    this.label = document.createElement('label');
    var labelTextNode = document.createTextNode(label);
    this.label.appendChild(labelTextNode);

    this.element = document.createElement('div');
    this.element.className = 'input-field';
    this.element.appendChild(this.label);
    this.element.appendChild(this.input);
};
extend(InputField, Field); // Inherit from Field.
InputField.prototype.getValue = function() {
    return this.input.value;
};


var TextareaField = function(id, label) { // implements Composite, FormItem
    Field.call(this, id);

    this.textarea = document.createElement('textarea');
    this.textarea.id = id;

    this.label = document.createElement('label');
    var labelTextNode = document.createTextNode(label);
    this.label.appendChild(labelTextNode);

    this.element = document.createElement('div');
    this.element.className = 'input-field';
    this.element.appendChild(this.label);
    this.element.appendChild(this.textarea);
};
extend(TextareaField, Field); // Inherit from Field.
TextareaField.prototype.getValue = function() {
    return this.textarea.value;
};


var SelectField = function(id, label) { // implements Composite, FormItem
    Field.call(this, id);

    this.select = document.createElement('select');
    this.select.id = id;

    this.label = document.createElement('label');
    var labelTextNode = document.createTextNode(label);
    this.label.appendChild(labelTextNode);

    this.element = document.createElement('div');
    this.element.className = 'input-field';
    this.element.appendChild(this.label);
    this.element.appendChild(this.select);
};
extend(SelectField, Field); // Inherit from Field.
SelectField.prototype.getValue = function() {
    return this.select.options[this.select.selectedIndex].value;
};


var contactForm = new CompositeForm('contact-form', 'POST', 'contact.php');

contactForm.add(new InputField('first-name', 'First Name'));
contactForm.add(new InputField('last-name', 'Last Name'));
contactForm.add(new InputField('address', 'Address'));
contactForm.add(new InputField('city', 'City'));
contactForm.add(new SelectField('state', 'State', stateArray));
// var stateArray = [ {'al', 'Alabama'}, ...];
contactForm.add(new InputField('zip', 'Zip'));
contactForm.add(new TextareaField('comments', 'Comments'));

addEvent(window, 'unload', contactForm.save);
addEvent(window, 'load', contactForm.restore);

var CompositeFielset = function(id, legendText) { // implements Composite, FormItem
    this.components = {};

    this.element = document.createElement('fieldset');
    this.element.id = id;

    if ( legendText) { // Create a legend if the optional second argument is set.
        this.legend = document.createElement('legend');
        this.legend.appendChild(document.createTextNode(legendText));
        this.element.appendChild(this.legend);
    }
};

CompositeFielset.prototype.add = function(child) {
    Interface.ensureImplements(child, Composite, FormItem);
    this.components[child.getElement().id] = child;
    this.element.appendChild(child.getElement());
};

CompositeFielset.prototype.remove = function(child) {
    delete this.components[child.getElement().id];
};
CompositeFielset.prototype.getChild = function(id) {
    if (this.components[id] != undefined) {
        return this.components[id];
    } else {
        return null;
    }
};
CompositeFielset.prototype.save = function(i) {
    for (var id in this.components) {
        if (this.components.hasOwnProperty(id)) continue;
        this.components[id].save();
    }
};
CompositeFielset.prototype.restore = function(i) {
    for (var id in this.components) {
        if (this.components.hasOwnProperty(id)) continue;
        this.components[id].restore();
    }
};
CompositeFielset.prototype.getElement = function(i) {
    return this.element;
};

var contactForm = new CompositeForm('contact-form', 'POST', 'contact.php');

var nameFieldSet = new CompositeFielset('name-fieldset');
nameFieldSet.add(new InputField('first-name', 'First Name'));
nameFieldSet.add(new InputField('last-name', 'Last Name'));
contactForm.add(nameFieldSet);

var addressFieldSet = new CompositeFielset('address-fieldset');
addressFieldSet.add(new InputField('address', 'Address'));
addressFieldSet.add(new InputField('city', 'City'));
addressFieldSet.add(new SelectField('state', 'State', stateArray));
addressFieldSet.add(new InputField('zip', 'Zip'));
contactForm.add(addressFieldSet);

contactForm.add(new TextareaField('comments', 'Comments'));

body.appendChild(contactForm.getElement());

addEvent(window, 'unload', contactForm.save);
addEvent(window, 'load', contactForm.restore);

addEvent('save-button', 'click', nameFieldSet.save);
addEvent('restore-button', 'click', nameFieldSet.restore);
