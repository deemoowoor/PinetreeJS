(function() {
    angular.module('pinetree')
    .directive('ptRoot', function() {
        return {
            restrict: 'E', // Element
            templateUrl: '/tpl/root.html',
            controller: 'ptRootCtrl',
            controllerAs: 'root'
        }
    });
});
