/*
 * Code taken from "Pro JavaScript Design Patterns" book.
 * http://jsdesignpatterns.com/
 */

var Interface = require('./Interface.js');

// moching document
var document = {
    createElement: function() {
        return {
            appendChild: function() {
            }
        };
    }
};

// ResultSet Interface.

var ResultSet = new Interface('ResultSet', ['getDate', 'getResults']);

// TestResult class.

var TestResult = function() { // implements ResultSet
    this.date = new Date();
    this.results = [];
};
TestResult.prototype.getDate = function() {
    return this.date;
};
TestResult.prototype.getResults = function() {
    return this.results;
};

// WeatherData class.

var WeatherData = function() { // implements ResultSet
    this.date = new Date();
    this.results = [];
};
WeatherData.prototype.getDate = function() {
    return this.date;
};
WeatherData.prototype.getResults = function() {
    return this.results;
};

var ResultFormatter = function(resultsObject) {
    if (!(resultsObject instanceof TestResult)) {
        throw new Error('ResultsFormatter: constructor requires an instance of TestResult as an argument');
    }
    this.resultsObject = resultsObject;
};

// ResultFormatter class, after adding interface checking.

var ResultFormatter = function(resultsObject) {
    Interface.ensureImplements(resultsObject, ResultSet);
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
var resultFormatter1 = new ResultFormatter(testResult);
resultFormatter1.renderResults();
var weatherData = new WeatherData();
var resultFormatter2 = new ResultFormatter(weatherData);
resultFormatter2.renderResults();
