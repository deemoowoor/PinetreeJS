(function() {
    'use strict';

    var tree = {
        branches: [
            { label: 'branch1', branches: [] },
            { label: 'branch2', branches: [
                { label: 'branch21' },
                { label: 'branch22' }
            ] }
        ]
    };

    var altTree = {
        branches: [
            { label: 'branch1', branches: [] },
            { label: 'branch2',
                branches: [
                    { label: 'branch21' }
                ] },
                { label: 'branch3',
                    branches: [
                    { label: 'branch31',
                        branches: [
                            { label: 'branch311' },
                            { label: 'branch312' },
                            { label: 'branch313' }
                        ]
                    }
                    ]
                }
                ]
            };

    angular.module('DemoApp', ['pinetree', 'pinetree.services.storage'])
    .controller('DemoCtrl', ['$scope', '$element', '$window', 'pinetreeLocalStorage',
                function($scope, $element, $window, pinetreeLocalStorage) {
                    if (Object.keys(pinetreeLocalStorage.model).length === 0) {
                        $scope.tree = tree;
                    } else {
                        $scope.tree = pinetreeLocalStorage.model;
                    }

                    $scope.addNew = function() {
                        $scope.tree.branches.push({ label: '', edit: true });
                    };

                    pinetreeLocalStorage.model = $scope.tree;
                }]);
}());
