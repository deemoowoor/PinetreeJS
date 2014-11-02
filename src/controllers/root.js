(function() {
    'use strict';

    angular.module('pinetree')
    .controller('ptRootCtrl', ['$scope', '$element',
                function($scope, $element, tree) {
                    $scope.text = tree.text;
                    $scope.branches = tree.branches;
                    this.toggleItem = function() {
                        $element.parent().children('ul.tree').toggle(30);
                    };
                }]);
}());
