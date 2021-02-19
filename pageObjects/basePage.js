
const selenium = require("selenium-webdriver");
require("chromedriver");
const until = selenium.until;
const chrome = require('selenium-webdriver/chrome');
const By = selenium.By;
var fs = require('fs');



//Build the driver for chrome
var driver = new selenium.Builder().forBrowser('chrome').build();

//set an implicit wait of 20 seconds (how long driver will wait for an element)
driver.manage().setTimeouts({implicit: 20000});

class BasePage {
    constructor(){
        //create global driver 
        global.driver = driver;
    }

    /**
     * navigate to a URL and maximize the window
     * @param {*} testURL 
     */
    async goToURL(testURL) {
       await driver.get(testURL);
       await driver.manage().window().maximize(); //enlarge window viewport
    }

    /**
     * enter text (text) into a field (locator)
     * @param {*} locator 
     * @param {*} text 
     */
    async inputText(locator, text){
        await driver.findElement(locator).sendKeys(text + "\n");
    }

    /**
     * return element text
     * @param {*} locator 
     */
    async getElementText(locator){
        var text = await driver.findElement(locator).getText();
        return text;
    }

    /**
     * Wait for the 'title' of the webpage then return true (if found)
     * @param {*} title 
     */
    async waitForTitle(title){
        var arrived = await driver.wait(until.titleContains(title), 30000);
        return arrived;
    }

    /**
     * Check for element(s) on page and return true if there is at least 1
     * @param {*} locator 
     */
    async isElementOnPage(locator){
        var elements = await driver.findElements(locator);
        var onPage = elements.length > 0;
        return onPage;
    }

    /**
     * make a selection from a dropdown menu where locator is the locator for the menu
     * and selection is the locator for the option in the menu
     * @param {*} locator 
     * @param {*} selection 
     */
    async makeDropDownSelection(locator, selection){
        var ddMenu = await driver.findElement(locator);
        await ddMenu.click();
        var ddSelection = await ddMenu.findElement(selection);
        await ddSelection.click();
    }

    /**
     * Take a screenshot of the current page and save it to a png file
     */
    async screenShot(){
        await driver.takeScreenshot().then(function(data){
            fs.writeFileSync('img.png', data, 'base64');
        });
    }
}

module.exports = BasePage;