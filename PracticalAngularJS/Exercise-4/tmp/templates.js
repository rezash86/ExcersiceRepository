angular.module('templates', ['../test/unit/userFormTemplate.tpl.html']);

angular.module("../test/unit/userFormTemplate.tpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("../test/unit/userFormTemplate.tpl.html",
    "<form name=\"userForm\" novalidate role=\"form\"> \n" +
    "    <div id=\"message\" ng-class=\"{'alert alert-success':(!error), 'alert alert-danger':(error)}\" ng-show=\"message\" ng-bind=\"message\"></div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <label class=\"control-label\" for=\"roomName\">Name</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter user name\" ng-model=\"user.name\" ng-trim=\"true\" required>\n" +
    "        <span class=\"label label-danger\" ng-show=\"userForm.name.$error.required\">Required!</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "        <label class=\"control-label\" for=\"roomLocation\">Email</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter user email\" ng-model=\"user.email\" ng-trim=\"true\" required>\n" +
    "        <span class=\"label label-danger\" ng-show=\"userForm.email.$error.required\">Required!</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "        <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "                <input type=\"checkbox\" ng-model=\"user.group\"> Is this a group user? {{user.group?'Yes':'No'}}\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "                                        \n" +
    "    <div class=\"form-group\">  \n" +
    "                                                \n" +
    "        <button class=\"btn btn-info\" ng-click=\"saveUser( user )\">Update User</button>\n" +
    "                                              \n" +
    "    </div>\n" +
    "</form>");
}]);
