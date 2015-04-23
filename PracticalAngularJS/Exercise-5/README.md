# Add pagination to the user list by a custom directive

Exercise-5 is built on top of Exercise-4. In this exercise, we will build a custom directive to add pagination to the user list. We will learn how to create and test a cutom directive.

## Build & development

#### Setup

1. npm install

2. bower install

3. grunt bower

#### Development

1. add userPagination.js for custom directive logic

2. modify userController.js to add onPageSelected function, which would be invoked by the user-pagination custom directive

3. modify index.html to include the user-pagination custom directive 

#### Unit Tests

1. add userPaginationSpec.js to test pagination custom direcive

2. modify karma.conf.js to include jquery.js

## Testing

Run 'grunt karma'