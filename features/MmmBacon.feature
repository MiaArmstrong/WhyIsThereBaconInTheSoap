@baconSuite

Feature: Mmmm Bacon
    As a user who wants to track bacon popularity KPI
    I want to inspect search results for bacon 
    So that I can ensure that the results align with bacon expectations

    @bacon
    Scenario: Inspect Bacon Search Results
        Given the user has navigated to the Google search page
        When the user performs a search for bacon
        Then the first search result returned will be for the Wikipedia article about bacon, the meat product
            And somewhere on the results page is a nutrition information facts area with a dropdown
            And the caloric difference of bacon pan-fried versus bacon baked is 43 versus 44 calories per slice
            #And the bacon format with the highest calories per serving is bacon raw
            #And the temperature in Bacon, Indian will be above freezing on Saturday