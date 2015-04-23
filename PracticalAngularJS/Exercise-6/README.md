# Use UI Grid to display the user list

In this exercise, we will re-write the user list using UI Grid. We will learn the basic of ui-grid API.


## Build & development

#### Setup

1. Execise-6 can be built on Exercise-2, start with a new work folder, copy over all files in Excercise-2 to this work folder 

2. npm install

3. add "angular-ui-grid" dependency in bower.json

4. bower install

5. grunt bower

#### Development

1. modify userController.js to add ui-grid configuration options

    add gridOptions and columnDefs


2. modify index.html

    include ui-grid.css, ui-grid.js, jquery.js and ui-bootstrap-tpls.js
    
    add ui-grid drective
        
#### Unit Tests

None

## Testing

Run 'grunt karma'