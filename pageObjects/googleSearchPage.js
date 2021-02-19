
var BasePage = require('./basePage');
const selenium = require("selenium-webdriver");
require("chromedriver");
const until = selenium.until;
const chrome = require('selenium-webdriver/chrome');
const By = selenium.By;

//locators
const locators = {
    txtSearch: By.xpath("//input[@name='q']")
}

class GoogleSearchPage extends BasePage {

    /**
     * Inputs a search query and then clicks enter
     * @param {*} text 
     */
    async searchQuery(text){
        await driver.wait(until.elementLocated(locators.txtSearch), 30000);
        this.inputText(locators.txtSearch, text);
    }
    
}

module.exports = new GoogleSearchPage();