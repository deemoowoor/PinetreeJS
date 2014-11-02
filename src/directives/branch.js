(function() {
    angular.module('pinetree')
    .directive('ptBranch', function() {
        return {
            restrict: 'E', // Element
            templateUrl: '/tpl/branch.html',
            controller: 'ptBranchCtrl',
            controllerAs: 'branch'
        };
    })
});
