(function() {
    "use strict";

    var module = angular.module('pinetree.directive', []);

    function nodeDirective(isRoot, name, req, controller) {
        var factory = function($compile) {
            return {
                restrict: 'AE', // Element
                require: req,
                controller: controller,
                scope: true,
                compile: function(element, attr) {
                    var expr = attr[name],
                        match = expr.match(/^(\S+)(\s+as\s+(\w+))?$/),
                        watch = match[1],
                        parentAlias = match[3] || '',
                        template,
                        link = {
                            post: function($scope, $element, $attrs, ctrl) {
                                $scope.level = isRoot ? 0 : $scope.level + 1;
                                $scope.isRoot = isRoot;
                                $scope.parentAlias = parentAlias;

                                $element.html(ctrl.template());
                                $compile($element.contents())($scope);

                                $scope.init(ctrl);

                                $scope.$watch(watch, function(value) {
                                    $scope.ptParent = value;

                                    if (parentAlias !== '') {
                                        $scope[parentAlias] = value;
                                    }
                                });
                            }
                        };

                    if (isRoot) {
                        template = element.html();
                        element.html('');
                        link.pre = function($scope, $element, $attrs, ctrl) {
                            ctrl.template(template);
                        };
                    }

                    return link;
                }
            };
        };
        return ['$compile', factory];
    }

    module.directive('ptTree', nodeDirective(true, 'ptTree', 'ptTree', 'ptTreeCtrl'));
    module.directive('ptBranch', nodeDirective(false, 'ptBranch', '^ptTree', 'ptBranchCtrl'));
}());
