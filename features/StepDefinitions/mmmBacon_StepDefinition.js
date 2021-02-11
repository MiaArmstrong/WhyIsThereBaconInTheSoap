var defineSupportCode = require("@cucumber/cucumber");
'use strict';
 
const { Given, When, Then } = require('@cucumber/cucumber');
 
const webdriver = require('selenium-webdriver');

Given('^the user has navigated to the Google search page$', function(callback){
    callback();
});
       // When the user performs a search for bacon
       // Then the first search result returned will be for the Wikipedia article about bacon, the meat product
           // And somewhere on the results page is a nutrition information facts area with a dropdown
           // And the caloric difference of bacon pan-fried versus bacon baked is 43 versus 44 calories per slice

