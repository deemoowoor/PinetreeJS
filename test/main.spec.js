describe('main', function() {

    var scope, $compile;
    var element;

    beforeEach(module('pinetree'));

    beforeEach(inject(function ($rootScope, _$compile_) {
        scope = $rootScope;
        $compile = _$compile_;

        element = angular.element('<pt-root ng-model="tree"></pt-root>');
        scope.text = 'Root element';
        scope.branches = [{
            text: 'Branch1',
            branches: []
        },
        {
            text: 'branch2',
            branches: []
        }];

    }));

    function initTree() {
        $compile(element)(scope);
        scope.$digest();
        return element;
    }

    it('should be created', function() {
        var tree = initTree();
        expect(tree.find('ul')).toExist();
    });
});
