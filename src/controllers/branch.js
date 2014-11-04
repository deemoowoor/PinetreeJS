(function() {
    'use strict';

    angular.module('pinetree.controller', [])
    .controller('ptBranchCtrl', ['$scope', '$element', 'treeConfig', 'initData',
                function($scope, $element, treeConfig, initData) {
                    this.scope = $scope;
                    $scope.element = $element;
                    $scope.modelValue = undefined;
                    $scope.parentScope = undefined;

                    $scope.init = function(parentCtrl) {
                        if (parentCtrl && parentCtrl.scope.modelValue) {
                            $scope.parentScope = parentCtrl.scope;
                            $scope.modelValue = parentCtrl.scope.modelValue[$scope.$index];
                            parentCtrl.initSubNode($scope);
                        } else {
                            if (initData) {
                                $scope.label = initData.label;
                                $scope.branches = initData.branches;
                                $scope.modelValue = [initData];
                            }
                        }

                        $element.on('$destroy', function() {
                            if (parentCtrl) {
                                parentCtrl.scope.destroySubNode($scope); // destroy sub nodes
                            }
                        });
                    };

                    $scope.initSubNode = function(subNode) {
                        if (!subNode.modelValue) {
                            return undefined;
                        }

                        $scope.branches.push(subNode);
                    };

                    $scope.destroySubNode = function(subNode) {
                        if (!subNode.modelValue) {
                            return undefined;
                        }

                        $scope.branches.splice(subNode.scope.$index, 1);
                    };

                    // Toggle child expansion
                    $scope.toggleItem = function() {
                        $element.parent().children('ul.tree').toggle(30);
                    };

                }
    ]);
}());
