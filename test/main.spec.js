describe('tree', function() {

    var scope, compile, element, newelement;

    beforeEach(module('pinetree'));

    beforeEach(inject(function ($rootScope, _$compile_) {
        scope = $rootScope;
        compile = _$compile_;

        var initData = {
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

        element = angular.element('<ul pt-tree="tree as branch">\n' +
                                  '<li ng-repeat="branch in branch.branches">\n' +
                                  '<label>{{ branch.label }}</label>\n' +
                                  '<ul pt-branch="branch"></ul></li></ul>');
        scope.tree = initData;
    }));

    function initTree() {
        newelement = compile(element)(scope);
        scope.$digest();
        scope = newelement.scope();
        return element;
    }

    var findFirstBranch = function(tree) {
        return tree.children('li').first();
    };

    var findFirstNestedBranch = function(tree) {
        return findFirstBranch(tree).children('ul').first().children('li');
    };

    var getLabel = function(element) {
        return element.children('label').text();
    };

    var getBadge = function(element) {
        return element.children('span').text();
    };

    it('should be created', function() {
        var tree = initTree();
        expect(tree).toExist();
    });

    it('should contain correct label', function() {
        var tree = initTree();
        expect(getLabel(findFirstBranch(tree))).toContain('branch1');
    });

    it('should contain 2 top branches', function() {
        var tree = initTree();
        expect(tree.children('li').length).toBe(2);
    });

    it('should contain branch with label branch1', function() {
        var tree = initTree();
        var branch = findFirstBranch(tree);
        expect(getLabel(branch)).toBe('branch1');
    });

    it('should contain second branch with label branch2', function() {
        var tree = initTree();
        var branch = tree.find('li:nth-child(2)').first();
        expect(getLabel(branch)).toBe('branch2');
    });

    it('should reflect change', function() {
        scope.tree.branches.push({ label: 'branch3' });
        tree = initTree();
        expect(tree.children('li').length).toBe(3);
        expect(getLabel(tree.find('li:nth-child(3)').first())).toBe('branch3');
    });
});
