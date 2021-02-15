
const selenium = require("selenium-webdriver");
require("chromedriver");
const until = selenium.until;
const chrome = require('selenium-webdriver/chrome');
const By = selenium.By;


//Build the driver for chrome
var driver = new selenium.Builder().forBrowser('chrome').build();

//set an implicit wait of 20 seconds (how long driver will wait for an element)
driver.manage().setTimeouts({implicit: 20000});

class BasePage {
    constructor(){
        //create global driver 
        global.driver = driver;
    }

    goToURL(testURL) {
        driver.get(testURL);
    }

    /**
     * enter text (text) into a field (locator)
     * @param {*} locator 
     * @param {*} text 
     */
    inputText(locator, text){
        driver.findElement(By.css(locator)).sendKeys(text + "\n");
    }


}

module.exports = BasePage;