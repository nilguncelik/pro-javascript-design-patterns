/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */


// moching document
var document = {
    createElement: function() {
        return {
            appendChild: function() {
            }
        };
    }
};


// TestResult class

var TestResult = function() {
    this.date = new Date();
    this.results = [];
};
TestResult.prototype.getDate = function() {
    return this.date;
};
TestResult.prototype.getResults = function() {
    return this.results;
};

// ResultFormatter class, before we implement interface checking.

var ResultFormatter = function(resultsObject) {
    if (!(resultsObject instanceof TestResult)) {
        throw new Error('ResultsFormatter: constructore requires an instance of TestResult as an argument');
    }
    this.resultsObject = resultsObject;
};

ResultFormatter.prototype.renderResults = function() {
    var dateOfTest = this.resultsObject.getDate();
    var resultsArray = this.resultsObject.getResults();

    var resultsContainer = document.createElement('div');

    var resultsHeader = document.createElement('h3');
    resultsContainer.innerHTML = 'Test Results from ' + dateOfTest.toUTCString();
    resultsContainer.appendChild(resultsHeader);

    var resultsList = document.createElement('ul');
    for ( var i = 0, len = resultsArray.length; i < len; i++) {
        var listItem = document.createElement('li');
        listItem.innerHTML = resultsArray[i];
        resultsList.appendChild(listItem);
    }

    console.log('results are rendered');
    return resultsContainer;
};

/* Run */
var testResult = new TestResult();
var resultFormatter = new ResultFormatter(testResult);
resultFormatter.renderResults();
