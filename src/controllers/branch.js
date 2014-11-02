(function() {
    'use strict';

    angular.module('pinetree')
    .controller('ptBranchCtrl', ['$scope', '$element',
                function($scope, $element, branch) {
                    $scope.text = branch.text;
                    $scope.branches = branch.branches;
                }]);
}());
