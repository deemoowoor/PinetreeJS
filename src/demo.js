(function() {
    'use strict';

    var tree = {
        label: 'Root',
        branches: [
            { label: 'Main branch',
                branches: [] },
            { label: 'Secondary branch',
                branches: [
                    { label: 'Tertiary branch',
                        branches: [] }
                ]
            },
                { label: 'Yet another branch',
                    branches: [] }
            ]
        };

    angular.module('pinetree')
    .constant('treeConfig',
      {
        branchTemplate: '',
        rootTemplate: '<ul class="nav nav-list">' +
    '<li><label class="tree-toggler nav-header">{{ label }} ({{ branches.length }} items)</label>' +
    '<ul class="nav nav-list tree" ng-show="branches.length">' +
        '<script type="text/ng-template" id="categoryTree">' +
            '<label class="tree-toggler nav-header">{{ branch.label }}' +
                '({{ branch.branches.length }} items)</label>' +
            '<ul class="nav nav-list tree" ng-if="branch.branches">' +
                '<li ng-repeat="branch in branch.branches" ng-include="' + "'categoryTree'" + '"></li>' +
            '</ul>' +
        '</script>' +
        '<li ng-repeat="branch in branches" ng-include="' + "'categoryTree'" + '"></li>' +
    '</ul>' +
    '<li>' +
    '</ul>'
    });

}());
