(function() {
    'use strict';

    angular.module('pinetree.controller', [])
    .controller('ptTreeCtrl', ['$scope', '$element', '$compile',
                function($scope, $element, $compile) {
                    var template;
                    this.template = function(tpl) {
                        if (tpl) {
                            template = tpl;
                        } else {
                            return template;
                        }
                    };
                }
    ])
    .controller('ptBranchCtrl', ['$scope', '$element', '$compile',
                function($scope, $element, $compile) {
                    this.scope = $scope;
                    $scope.element = $element;
                    $scope.modelValue = undefined;
                    $scope.parentScope = undefined;

                    $scope.init = function(parentCtrl) {
                        $element.on('$destroy', function() {
                            if (parentCtrl) {
                                parentCtrl.scope.destroySubNode($scope); // destroy sub nodes
                            }
                        });
                    };

                    $scope.initSubNode = function(subNode) {
                        $scope.branches.push(subNode);
                    };

                    $scope.destroySubNode = function(subNode) {
                        $scope.branches.splice(subNode.scope.$index, 1);
                    };

                    // Add an empty child
                    $scope.add = function() {
                        $scope.initSubNode({ label: 'emptyLabel' });
                    };

                    $scope.remove = function() {
                        $scope.branches.splice($scope.$index, 1);
                    };

                    // Toggle child expansion
                    $scope.toggleItem = function() {
                        $element.parent().children('ul.tree').toggle(30);
                    };

                }
    ]);
}());
