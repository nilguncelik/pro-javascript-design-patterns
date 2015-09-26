/*
* Code taken from "Pro JavaScript Design Patterns" book.
* http://jsdesignpatterns.com/
*/

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var GalleryItem = new Interface('GalleryItem', ['show', 'hide']);

// Dynamic Gallery class.

var DynamicGallery = function() { // implements Composite, GalleryItem
    this.children = [];

    this.element = document.createElement('div');
    this.element.id = id;
    this.element.className = 'dynamic-gallery';
};

DynamicGallery.prototype = {

    // Implement the Composite interface.

    add: function(child) {
        Interface.ensureImplements(child, Composite, GalleryItem);
        this.children.push(child);
        this.element.appendChild(child.getElement());
    },
    remove: function(child) {
        for ( var node, i = 0; node = this.getChild(i); i++) {
            if ( node == child ) {
                this.formComponents[i].splice(i, 1);
                break;
            }
        }
        this.element.removeChild(child.getElement());
    },
    getChild: function(i) {
        return this.children[i];
    },

    // Implement the GalleryItem Interface

    hide: function() {
        for ( var node, i = 0; node = this.getChild(i); i++) {
            node.hide();
        }
        this.element.style.display = 'none';
    },

    show: function() {
        this.element.style.display = 'block';
        for ( var node, i = 0; node = this.getChild(i); i++) {
            node.show();
        }
    },

    // Helper methods

    getElement: function() {
        return this.element;
    }
};

// GalleryImage class.

var GalleryImage = function(src) { // implements Composite, GalleryItem
    this.element = document.createElement('img');
    this.element.className = 'gallery-image';
    this.element.src = src;
};

GalleryImage.prototype = {
    // Implement the Composite interface.

    add: function() {},   // This is a leaf node, so we dont implement these methods, we just define them.
    remove: function() {},
    getChild: function() {},

    // Implement the GalleryItem interface.

    hide: function() {
        this.element.style.display = 'none';
    },
    show: function() {
        this.element.style.display = '';  // restore the display attribute to its previous setting.
    },

    // Helper methods

    getElement: function() {
        return this.element;
    }
};


var topGallery = new DynamicGallery('top-gallery');

topGallery.add(new GalleryImage('/img/image-1.jpg'));
topGallery.add(new GalleryImage('/img/image-2.jpg'));
topGallery.add(new GalleryImage('/img/image-3.jpg'));

var vacationPhotos = new DynamicGallery('vacation-photos');

for (var i = 0; i < 30; i++) {
    vacationPhotos.add(new GalleryImage('/img/vac/image-' + i + '.jpg'));
}
topGallery.add(vacationPhotos);
topGallery.show();     // Show the main gallery,
vacationPhotos.hide(); // but hide the vacation gallery.
