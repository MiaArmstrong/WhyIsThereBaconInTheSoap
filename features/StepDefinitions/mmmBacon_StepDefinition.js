const { Given, When, Then, After, Status } = require('@cucumber/cucumber');
const googleResultsPage = require('../../pageObjects/googleResultsPage');
const assert = require('assert').strict;
const fetch = require('node-fetch');
 

var googleSearchPage = require('../../pageObjects/googleSearchPage');

urlGoogleSearchPage = "https://google.com";
uriBaconIndianaWeather = "https://api.weather.gov/gridpoints/LMK/24,82/forecast";

Given('the user has navigated to the Google search page', async function(){
    googleSearchPage.goToURL(urlGoogleSearchPage);
    var arrived = await googleSearchPage.waitForTitle("Google");
    assert.deepStrictEqual(arrived, true, "Successfully navigated to 'Google' page.");
});

When('the user performs a search for bacon', async function(){
    await googleSearchPage.searchQuery("Bacon");
    var arrived = await googleSearchPage.waitForTitle("Bacon - Google Search");
    assert.deepStrictEqual(arrived, true, "Successfully performed search for 'Bacon'");
});

Then('the first search result returned will be for the Wikipedia article about bacon, the meat product', async function(){
    await googleResultsPage.waitForSearchResults();
    var firstResult = await googleResultsPage.checkFirstResult("Bacon is a type of salt-cured pork"); //check for this text in the first result
    assert.deepStrictEqual(firstResult, true, "'Bacon (the meat product)' is the first result from the search.");
    firstResult = await googleResultsPage.checkFirstResultIsNot("Francis Bacon"); //check for this text in the first result
    assert.deepStrictEqual(firstResult, true, "'Francis Bacon is not the first result from the search");

});

Then('somewhere on the results page is a nutrition information facts area with a dropdown', async function(){
    var nutritionDropdown = await googleResultsPage.verifyNutritionFactsDropdown();
    assert.deepStrictEqual(nutritionDropdown, true, "There is a 'Nutrition Facts' section with a bacon type dropdown in it on the results page");
});

Then('the caloric difference of bacon pan-fried versus bacon baked is 43 versus 44 calories per slice', async function(){
    var caloriesBaconPanFried = await googleResultsPage.getCaloriesPerSlice("Bacon, pan-fried");
    var caloriesBakedBacon = await googleResultsPage.getCaloriesPerSlice("Bacon, baked");
    assert.deepStrictEqual(caloriesBaconPanFried === "43" && caloriesBakedBacon === "44", true, "The caloric difference of bacon pan-fried vs bacon baked is 43 vs 44");
});

Then('the bacon format with the highest calories per serving is bacon raw', async function(){
    var caloriesBaconPanFried = parseInt(await googleResultsPage.getCaloriesPerSlice("Bacon, pan-fried"));
    var caloriesBakedBacon = parseInt(await googleResultsPage.getCaloriesPerSlice("Bacon, baked"));
    var caloriesMicrowavedBacon = parseInt(await googleResultsPage.getCaloriesPerSlice("Bacon, microwaved"));
    var caloriesRawBacon = parseInt(await googleResultsPage.getCaloriesPerSlice("Bacon, raw"));
    var caloriesCanadianBacon = parseInt(await googleResultsPage.getCaloriesPerSlice("Canadian bacon, unheated"));
    var rawHighest = caloriesBaconPanFried < caloriesRawBacon;
    rawHighest = caloriesBakedBacon < caloriesRawBacon;
    rawHighest = caloriesMicrowavedBacon < caloriesRawBacon;
    rawHighest = caloriesCanadianBacon < caloriesRawBacon;
    assert.deepStrictEqual(rawHighest, true, "The bacon format with the highest calories per serving is Bacon Raw");
});

Then('the temperature in Bacon, Indiana will be above freezing on Saturday', async function(){
    const response = await fetch(uriBaconIndianaWeather);
    const responseJson = await response.json(); //extract json from response
    var periods = responseJson.properties.periods;
    var len = periods.length;
    var temperature;
    for(i=0; i < len; ++i){
        if(responseJson.properties.periods[i].name === "Saturday"){
            temperature = responseJson.properties.periods[i].temperature;
            break;
        }
    }
    assert.deepStrictEqual(parseInt(temperature) > 32, true, "the temperature in Bacon, Indiana will be above freezing on Saturday.");
});

After(function (testCase) {
    var world = this;
    if (testCase.result.status === Status.FAILED) {
      return driver.takeScreenshot().then(function(screenShot) {
        world.attach(screenShot, 'base64:image/png');
      });
    }
  });

