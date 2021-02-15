//import defineSupportCode from "@cucumber/cucumber";
//'use strict';

const { Given, When, Then } = require('@cucumber/cucumber');
 

var googleSearchPage = require('../../pageObjects/googleSearchPage');
//var googleResultsPage = require('../pageObjects/googleResultsPage.js');

urlGoogleSearchPage = "https://google.com";

Given('the user has navigated to the Google search page', function(callback){
    googleSearchPage.goToURL(urlGoogleSearchPage);
    callback();
});

When('the user performs a search for bacon', function(callback){
    googleSearchPage.searchQuery("Bacon");
    callback();
});

Then('the first search result returned will be for the Wikipedia article about bacon, the meat product', function(callback){

});

Then('somewhere on the results page is a nutrition information facts area with a dropdown', function(callback){

});

Then('^the caloric difference of bacon pan-fried versus bacon baked is 43 versus 44 calories per slice$', function(callback){

});

