(function() {
    var tree = {
        text: 'Root',
        branches: [
            {text: 'Main branch',
                branches: [
                ]},
            {text: 'Secondary branch',
                branches: [
                    {text: 'Tertiary branch',
                        branches: []}
                ]},
            {text: 'Yet another branch',
                branches: []}
        ]
    };

    angular.module('PinetreeDemo', ['Pinetree'])
    .directive('ptRoot', function() {
        return {
            restrict: 'E', // Element
            templateUrl: '/tpl/root.html',
            controller: function($scope, $element) {
                $scope.text = tree.text;
                $scope.branches = [tree.branches];
                this.toggleItem = function() {
                    $element.parent().children('ul.tree').toggle(30);
                }
            },
            controllerAs: 'root'
        }
    })
    .directive('ptBranch', function() {
        return {
            restrict: 'E', // Element
            templateUrl: '/tpl/branch.html',
            controller: function($scope, $element) {
                $scope.text = '';
                $scope.branches = [];
            },
            controllerAs: 'branch'
        };
    });

}());
