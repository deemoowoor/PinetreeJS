(function() {
    "use strict";

    angular.module('pinetree.directive', [])
    .directive('ptBranch', ['treeConfig', function(treeConfig) {
        return {
            restrict: 'E', // Element
            require: ['?^ngModel', '?^ptBranch'],
            template: treeConfig.branchTemplate,
            controller: 'ptBranchCtrl',
            controllerAs: 'branch',
            scope: true,
            link: function($scope, $element, $attrs, parents) {
                var parentCtrl = parents[1];
                var ngModel = parents[0];

                // if model is defined but not parentCtrl, then it's a root element
                if (ngModel && !parentCtrl) {
                    ngModel.$render = function() {
                        if (!ngModel.$modelValue || !angular.isArray(ngModel.$modelValue)){
                            $scope.modelValue = [];
                        }

                        $scope.modelValue = ngModel.$modelValue;
                    };
                }

                $scope.init(parentCtrl);
            }
        };
    }]);
}());
