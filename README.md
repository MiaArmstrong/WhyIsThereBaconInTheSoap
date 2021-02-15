# WhyIsThereBaconInTheSoap
Test Automation Sample utilizing Node.js, CucumberJS, Selenium Webdriver, NPM, and Chai

Initial Setup Guide:

1. Install Visual Studio Code
2. Install Node (which includes npm)
3. Install Selenium Webdriver
4. Install Chromedriver
5. Install Git
6. Clone Repo from Github 
7. Install Cucumber-js
8. Install Chai

---

1. To install Visual Studio Code, go to https://code.visualstudio.com/download and download the installation appropriate for your system. Follow the installation wizard to install and then open the program. You will see a welcome tab which you can close. Use Ctrl + ` to toggle the terminal screen open. 

2. From the command line or the terminal in VS Code: type in `where node` (PC) or `which node` (MAC) then press Enter. If you have Node already the terminal will give you a location, if you don’t have it, it will give you some kind of error message. If you don’t have Node, use the following instructions to install it: [Windows](http://treehouse.github.io/installation-guides/windows/node-windows.html) and [MAC](http://treehouse.github.io/installation-guides/mac/node-mac.html)

3. From the command line or the terminal in VS Code: create a new directory for storing your version of this code. Navigate to the parent directory of your choice using `cd directory-name`. Next install Selenium Webdriver: Since we have Node installed we also have NPM (node package manager) which allows you to install node based modules. We want to install one of those open source modules, the one for Selenium. From the command line, in your selenium-basics directory, enter `npm install selenium-webdriver`. It’s going to go and download that stuff and it’s going to give us some warnings. These warnings are basically just because we haven’t yet made our folder a package. What it did do was install a bunch of node modules. We can see the node modules that we downloaded by using `ls node_modules` (MAC) or `dir node_modules` (PC).

4. From the command line or the terminal in VS Code: Now that we have the package installed we actually need to install the webDriver, the Chrome Specific WebDriver. We’ll install this globally so you don’t need to do it over and over again. Enter `npm install chromedriver -g`. The “-g” part installs this globally.  You need to run this command as an administrator or “root” on a MAC you would append “sudo” to the command so it would be `sudo npm install chromedriver -g` and on PC you should just open an administrative command prompt window. You can do this several ways, one way is to select Run As Administrator from the start menu after you search for Command Prompt. Once we have it installed we can enter `chromedriver --version` just to make sure that it is working and is really installed. If you ever get any errors having to do with Chromedriver, make sure to enter `npm install chromedriver` again to make sure you are still up to date. 

5. To install Git: Go here https://git-scm.com/downloads and follow installation directions. In VS Code: go to File> Preferences> Settings then search for "Git Enabled" scroll to find Git: Enabled check box. This box should be checked. 

6. From VS Code: Ensure you have navigated to the directory that you want to keep your version of the project in. Click View> Command Palette and then select Git:Clone from the list. A field that requires the Repository URL will appear. To get the repository URL you will need to have access to the [repository](https://github.com/MiaArmstrong/WhyIsThereBaconInTheSoap.git) for this project and enter it into the field. The application will then prompt you to select a location to store the project, select the folder you created in step 3. Follow the prompts and click their Open or Open in new Window. You will then see the code for the project in your left sidebar of VS Code. 

Note: Alternately (to 5 and 6) you can just install git bash and then navigate to the parent folder you want to store your version of the repository in, and open a git bash window there. Then you just do `git clone https://github.com/MiaArmstrong/WhyIsThereBaconInTheSoap.git`. Once that is complete you just open that folder from VS Code. 

7. From the command line or the terminal in VS Code: install cucumber-js by entering `npm install --save-dev @cucumber/cucumber` (cucumber is a test framework for behavior driven JavaScript development - this is so we can write tests in Gherkin and use feature files.)


If you need more guidance [here](https://www.youtube.com/watch?v=Fk12ELJ9Bww) is a good video on how to install and use git on VS Code.

---

How to Run the tests:

1. Complete the setup steps above.
2. ensure that Chromedriver is up to date `npm install chromedriver`
3. run the test suite from the command line or from the VS Code terminal by navigating to the WhyIsThereBaconInTheSoap directory and then entering `npm test` into the command line/ terminal
4. Running the regression suite will create a report file that is located in the project directory. This file has the test results listed by scenario. 


---

Other Information:

This test suite is designed to run on Chrome. This test suite was developed on Windows but should be able to run on Windows or Mac (Chrome).

If you want to see the cucumber report (and I know you do!) you can follow the link in the terminal "View your Cucumber Report at:"
If you don't see a link and instead see a box with instructions on how to set up the report, you will need to set two environmental variables. 

To set environmental variables in the VS code terminal:
`$env:CUCUMBER_PUBLISH_TOKEN='db2d7cc9-cf9e-4707-a601-769ff68d6dee'`
and then
`$env:CUCUMBER_PUBLISH_ENABLED='true'`

that's it. Now run the test suite using the same `npm test` command and there will be a link you can follow at the bottom of the test results to see the cucumber report. You will need to login to Gitlab to see the report.




