describe('tree', function() {

    var scope, $compile, element;

    beforeEach(module('pinetree'));

    beforeEach(inject(function ($rootScope, _$compile_, initData) {
        scope = $rootScope;
        $compile = _$compile_;

        initData = {
            label: 'Root branch',
            branches: [{
                label: 'branch1'
            },
            {
                label: 'branch2',
                branches: [{
                    label: 'branch21'
                },
                {
                    label: 'branch22'
                }]
            }]
        };

        element = angular.element('<pt-branch></pt-branch>');
        scope.label = initData.label;
        scope.branches = initData.branches;
    }));

    function initTree() {
        element = $compile(element)(scope);
        scope.$digest();
        scope = element.scope();
        return element;
    }

    var findRoot = function(tree) {
        return tree.children('ul').first().children('li').first();
    };

    var findFirstNested = function(tree) {
        return findRoot(tree).children('ul');
    };

    var getLabel = function(element) {
        return element.children('label').text();
    };

    var getBadge = function(element) {
        return element.children('span').text();
    };

    it('should be created', function() {
        var tree = initTree();
        expect(findRoot(tree)).toExist();
    });

    it('should contain correct label', function() {
        var tree = initTree();
        expect(getLabel(findRoot(tree))).toContain('Root branch');
    });

    it('should contain 2 badge', function() {
        var tree = initTree();
        expect(getBadge(findRoot(tree))).toBe('2');
    });

    it('should contain 2 branches', function() {
        var tree = initTree();
        expect(findFirstNested(tree)).toExist();
        expect(findFirstNested(tree).children('li').length).toBe(2);
    });

    it('should contain branch with label branch1', function() {
        var tree = initTree();
        var nestedBranches = findFirstNested(tree);
        expect(getLabel(nestedBranches.first().children('li').first())).toContain('branch1');
    });

    it('should contain second branch with label branch2', function() {
        var tree = initTree();
        var nestedBranches = findFirstNested(tree);
        expect(getLabel(nestedBranches.find(':nth-child(2)'))).toContain('branch2');
    });

    it('should reflect change', function() {
        var tree = initTree();
        scope.branches.push({ label: 'branch3' });
        tree = initTree();
        var nestedBranches = findFirstNested(tree);
        expect(nestedBranches.children('li').length).toBe(3);
    });
});
