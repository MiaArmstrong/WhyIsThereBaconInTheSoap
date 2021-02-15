var BasePage = require('./basePage');

//locators
txtSearch = "input[name=q]";

class GoogleSearchPage extends BasePage {

    /**
     * Inputs a search query and then clicks enter
     * @param {*} text 
     */
    searchQuery(text){
        this.inputText(txtSearch, text);
    }
    
}

module.exports = new GoogleSearchPage();