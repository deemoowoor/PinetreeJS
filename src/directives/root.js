(function() {
    "use strict";

    angular.module('pinetree')
    .directive('ptRoot', ['treeConfig', function(treeConfig) {
        return {
            restrict: 'E', // Element
            templateUrl: treeConfig.rootTemplateUrl,
            controller: 'ptRootCtrl',
            controllerAs: 'root',
            scope: true
        };
    }]);
}());
