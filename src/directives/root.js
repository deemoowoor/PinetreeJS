(function() {
    "use strict";

    angular.module('pinetree')
    .directive('ptRoot', ['treeConfig', function(treeConfig) {
        return {
            restrict: 'E', // Element
            template: treeConfig.rootTemplate,
            controller: 'ptRootCtrl',
            controllerAs: 'root',
            scope: true
        };
    }]);
}());
