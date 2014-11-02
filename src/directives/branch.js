(function() {
    "use strict";

    angular.module('pinetree')
    .directive('ptBranch', ['treeConfig', function(treeConfig) {
        return {
            restrict: 'E', // Element
            templateUrl: treeConfig.branchTemplateUrl,
            controller: 'ptBranchCtrl',
            controllerAs: 'branch'
        };
    }]);
}());
