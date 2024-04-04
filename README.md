# Apply Digital Automation
## An Automation exercise website Automation made with Cypress

### Test flow and objective
The objective of the designed test case is to simulate the process of buying a product in the website as a new user, who has to enter, scroll and select a product it likes, register with its personal information, entering its card information and paying. Also the user has to logout, log in with its registered data and fill a Contact Us form.

### Test plan, design and strategy
This simple Node.js repository represents an automation made with Cypress to automate an exercise website which consists in a test clothing store.
The repository implements the Page Object model, that maps every website page as a Javascript file with its respective locators in order to have a cleaner and more practical code organization. There is only one test file, "flow.cy.js", which is in the e2e folder.
There is also a HTML test report (mochawesome.html) made with Mochawesome in the results folder showing the correct execution of the test case.

### Setting up the test environment: Hw to run the automation
First, this repository has to be cloned to a local folder with Git and the command `npm install` has to be executed in that directory.
To run the automation, the command `npm run cypress:open` has to be executed and after that, the flow.cy.js test case has to be selected in Cypress UI.
Also, if needed, the mochawesome reporter can be executed with the command `npx cypress run --reporter mochawesome --reporter-options reportDir="cypress/results", overwrite=true, html=true` which executes the test case in headless mode, creating a report in the results folder, overwriting it and saving the report in a HTML file just as specified by its parameters.