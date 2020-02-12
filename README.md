# SampleLiveTest

The Sample Live Test has been automated using webdriverio.
It is developed using BDD framework Cucumber.
Register.feature is the feature file.
RegisterStepDef.js is the step definitions coressponding to the above feature file.
Chai is used for assertion and allure reports are generated.

To run the test, follow the below steps:

1) Open Visual Studio Code (VSC)
2) Add the folder cloned from repository into VSC explorer
3) Navigate to steps-definition folder and open RegisterStepDef.js file
4) Modify the value to be set as email address in the 'When' function definition

emailtab.setValue("john.legend3@gmail.com");

While executing another time, change the email address to
emailtab.setValue("john.legend4@gmail.com");

This is to be done as the website throws error when an already used email ID is given.

Parametrization can be done to avoid this (yet to be explored).

5) Open in terminal with git bash
6) Exceute the below command
$ npm run test

Example:
TANUSHRI@TANUSHRI-PC MINGW64 /d/TANU/WebDriverIO
$ npm run test

7) Allure reports can be viewed in Reports folder.