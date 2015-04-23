
Exercise-4 is built on top of Exercise-3. In this exercise, we will add logic to process user update. We will learn how to validate user input from the form and how to invoke REST service to persist the user update. Most interestingly, we willl learn how to test the form validation with the help of grunt-html2js plugin.

## Build & development

#### Setup

1. npm install

2. bower install

3. grunt bower

#### Development

1. modify index.html

    add "update user" at the bottom of user form, register "UserCtrl" at the panel-body

2. modify userController.js

    add "UserCtrl" controller, add saveUser logic in the UserCtrl controller 

3. add message display in index.html

#### Unit Tests

1. modify package.json to add "grunt-html2js" and "karma-ng-html2js-preprocessor" node modules.

2. modify Gruntfile.js to add html2js plugin configuration

    html2js config, load task and register task
    
3. modify karma.conf.js to add karma-ng-html2js-preprocessor

4. add UserCtrl test suites in userControllerSpec.js to user update logic

    add userFormTemplate.tpl.html form template file, add service mock for updateUser, add form mocking logic using userFormTemplate, add two test cases

## Testing

Run 'grunt karma'
