# Add detail views to the user list

Exercise-3 is built on top of Exercise-2. In this exercise, we will add a view for each user row in the user list. This view uses form to display user details. We will learn how to use ng-switch to show and hide a specific view in the user list.


## Build & development

1. npm install

2. bower install

3. grunt bower

4. modify index.html

    add ng-switch, add bootstrap panel, add bootstrap form

5. modify userController.js

    add selectUser, unselectUser and isSelected methods in the controller

6. modify userControllerSpec.js to test newly added methods in userController

    add test cases for selectUser, unselectUser and isSelected methods in the controller

## Testing

Run 'grunt karma'