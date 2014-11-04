(function() {
    'use strict';

    angular.module('pinetree', ['pinetree.controller', 'pinetree.directive'])
    .value('initData', undefined)
    .constant('treeConfig',
              { branchTemplate: '<ul class="list-group tree">' +
                      '<li class="list-group-item"><span class="glyphicon glyphicon-minus"></span>\n' +
                      '<label class="tree-toggler">{{ label }}</label>\n' +
                      '<span class="badge" ng-show="branches && collapsed">{{ branches.length }}</span>' +
                      //'<span class="pull-right"><span class="glyphicon glyphicon-remove-sign text-danger"></span></span>' +
                      //'<span class="pull-right"><span class="glyphicon glyphicon-plus-sign text-info"></span></span>' +
                      '<ul class="list-group tree" ng-show="branches.length">\n' +
                      '<script type="text/ng-template" id="categoryTree">\n' +
                      '<span class="glyphicon glyphicon-minus"></span>\n' +
                      '<label class="tree-toggler">{{ branch.label }}</label> ' +
                      '<span class="badge" ng-show="branch.branches && branch.collapsed">{{ branch.branches.length }}</span>' +
                      //'<span class="pull-right"><span class="glyphicon glyphicon-remove-sign text-danger"></span></span>' +
                      //'<span class="pull-right"><span class="glyphicon glyphicon-plus-sign text-info"></span></span>' +
                      '<ul class="list-group tree" ng-if="branch.branches">\n' +
                      '<li class="list-group-item" ng-repeat="branch in branch.branches" ng-include="' + "'categoryTree'" + '"></li>\n' +
                      '</ul>\n' +
                      '</script>\n' +
                      '<li class="list-group-item" ng-repeat="branch in branches" ng-include="' + "'categoryTree'" + '"></li>\n' +
                      '</ul>\n' +
                      '</li>\n' +
                      '</ul>\n' +
                      '</div>\n' });
}());
