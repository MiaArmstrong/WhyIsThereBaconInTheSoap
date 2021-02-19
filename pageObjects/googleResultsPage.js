var BasePage = require('./basePage');
const selenium = require("selenium-webdriver");
require("chromedriver");
const until = selenium.until;
const chrome = require('selenium-webdriver/chrome');
const By = selenium.By;

//locators
const locators = {
    firstResult: By.xpath("(//div[@id='search']/div/div/div/div)[1]"), 
    nutritionFactsSection: By.xpath("//*[text()='Nutrition Facts']/ancestor::div[5]"),
    ddBaconType: By.xpath("(//*[text()='Nutrition Facts']/ancestor::div[5]//select)[1]"),
    txtCaloriesValue: By.xpath("//span[text()='Calories']/following-sibling::span")
}


class GoogleResultsPage extends BasePage {

    /**
     * Wait for the search results page to load
     */
    async waitForSearchResults(){
        await driver.wait(until.elementLocated(locators.firstResult), 30000);
    }

    /**
     * Returns true if the first result in the results list contains the expected result
     * @param {*} expectedResult 
     */
    async checkFirstResult(expectedResult){
        var firstResult = await this.getElementText(locators.firstResult); //get all the text in the first result in the list
        return firstResult.includes(expectedResult);    
    }

    /**
     * Returns true if the first result in the results list does NOT contain the expected result
     * @param {*} expectedResult 
     */
    async checkFirstResultIsNot(expectedResult){
        var firstResult = await this.getElementText(locators.firstResult); //get all the text in the first result in the list
        return !firstResult.includes(expectedResult);
    }

    /**
     * Returns true if the nutrition facts dropdown is present on the page
     */
    async verifyNutritionFactsDropdown(){
        var onPage = await this.isElementOnPage(locators.nutritionFactsSection);
        onPage = await this.isElementOnPage(locators.ddBaconType);
        return onPage;
    }

    /**
     * Returns the calories value for the indicated bacon type as a string
     * @param {*} baconType 
     */
    async getCaloriesPerSlice(baconType){
        await this.makeDropDownSelection(locators.ddBaconType, By.xpath("//option[text()='" + baconType + "']"));
        await driver.wait(until.elementLocated(By.xpath("//select[@title='" + baconType + "']")));
        var calories = await this.getElementText(locators.txtCaloriesValue); //get calories of bacon type selected
        return calories;
    }
}

module.exports = new GoogleResultsPage();