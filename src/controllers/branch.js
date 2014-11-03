(function() {
    'use strict';

    angular.module('pinetree')
    .controller('ptBranchCtrl', ['$scope', '$element', 'treeConfig',
                function($scope, $element, treeConfig) {
                    $scope.$modelValue = undefined;
                }])
    .controller('ptRootCtrl', ['$scope', '$element', 'treeConfig',
                function($scope, $element, treeConfig) {
                    $scope.$modelValue = undefined;
                    $scope.toggleItem = function() {
                        $element.parent().children('ul.tree').toggle(30);
                    };
                }]);
}());
