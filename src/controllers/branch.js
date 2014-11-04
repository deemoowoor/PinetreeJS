(function() {
    'use strict';

    angular.module('pinetree')
    .controller('ptBranchCtrl', ['$scope', '$element', 'treeConfig',
                function($scope, $element, treeConfig) {
                    this.scope = $scope;
                    $scope.modelValue = undefined;
                    $scope.parentScope = undefined;

                    $scope.init = function(controllers) {
                        var parentCtrl = controllers[1] || controllers[0];
                        $scope.modelValue = parentCtrl.scope.modelValue[$scope.$index];
                        $scope.parentScope = parentCtrl.scope;
                        parentCtrl.initSubNode($scope);

                        $element.on('$destroy', function() {
                            parentCtrl.scope.destroySubNode($scope); // destroy sub nodes
                        });
                    };
                }
    ])
    .controller('ptRootCtrl', ['$scope', '$element', 'treeConfig',
                function($scope, $element, treeConfig) {
                    this.scope = $scope;
                    $scope.modelValue = undefined;

                    if (angular.isDefined(treeConfig.initTree)) {
                        $scope.label = treeConfig.initTree.label;
                        $scope.branches = treeConfig.initTree.branches;
                    }

                    // Toggle child expansion
                    $scope.toggleItem = function() {
                        $element.parent().children('ul.tree').toggle(30);
                    };
                }
    ]);
}());
