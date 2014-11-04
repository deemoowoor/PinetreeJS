(function() {
    "use strict";

    angular.module('pinetree')
    .directive('ptBranch', ['treeConfig', function(treeConfig) {
        return {
            restrict: 'E', // Element
            require: ['^ptRoot', '?^ptBranch'],
            template: treeConfig.branchTemplate,
            controller: 'ptBranchCtrl',
            controllerAs: 'branch',
            scope: {},
            link: function($scope, $element, $attrs, controllers) {
                $scope.init(controllers);
            }
        };
    }]);
}());
