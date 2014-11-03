describe('tree', function() {

    var scope, $compile;
    var element;

    beforeEach(module('pinetree'));

    beforeEach(inject(function ($rootScope, _$compile_) {
        scope = $rootScope;
        $compile = _$compile_;

        element = angular.element('<pt-root></pt-root>');
        scope.label = 'Root element';
        scope.branches = [{
            label: 'branch1',
            branches: []
        },
        {
            label: 'branch2',
            branches: [{
                label: 'branch21',
                branches: []
            }]
        }];

    }));

    function initTree() {
        $compile(element)(scope);
        scope.$digest();
        return element;
    }

    var findFirstNested = function(tree) {
        return tree.children('ul').first().children('li').first().children('ul');
    };

    it('should be created', function() {
        var tree = initTree();
        expect(tree.find('ul.nav li label')).toExist();
    });

    it('should contain Root element text', function() {
        var tree = initTree();
        expect(tree.find('ul.nav > li > label').text()).toContain('Root element');
    });

    it('should contain 2 items text', function() {
        var tree = initTree();
        expect(tree.find('ul.nav > li > label').text()).toContain('2 items');
    });

    it('should contain 2 branches', function() {
        var tree = initTree();
        expect(findFirstNested(tree)).toExist();
        expect(findFirstNested(tree).children('li').length).toBe(2);
    });

    it('should contain branch with label branch1', function() {
        var tree = initTree();
        var nestedBranches = findFirstNested(tree);
        expect(nestedBranches.first().find('label').text()).toContain('branch1');
    });

    it('should contain second branch with label branch2', function() {
        var tree = initTree();
        var nestedBranches = findFirstNested(tree);
        expect(nestedBranches.find(':nth-child(2)').find('label').text()).toContain('branch2');
    });
});
