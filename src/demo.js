(function() {
    'use strict';

    var tree = {
        label: 'branch',
        branches: [
            { label: 'branch1' },
            { label: 'branch2',
                branches: [
                    { label: 'branch21' }
                ] },
                { label: 'branch22',
                branches: [
                    { label: 'branch221',
                        branches: [
                            { label: 'branch2211' },
                            { label: 'branch2212' },
                            { label: 'branch2213' }
                        ]
                    }
                    ]
                }
                ]
            };

    angular.module('DemoApp', ['pinetree'])
    .controller('DemoCtrl', ['$scope', '$element',
                function($scope, $element) {
                    $scope.tree = tree;
                }]);
}());
