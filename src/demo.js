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
        'branchTemplateUrl': 'demo/branch.html',
        'rootTemplateUrl': 'demo/root.html'
    })
    .controller('DemoCtrl', ['$scope', 'ptRootCtrl', function($scope, ptRoot) {
        $scope.label = tree.label;
        $scope.branches = tree.branches;
    }]);

}());
