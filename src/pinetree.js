(function() {
    'use strict';

    var tree = {
        text: 'Root',
        branches: [
            { text: 'Main branch',
                branches: [] },
            { text: 'Secondary branch',
                branches: [
                    { text: 'Tertiary branch',
                        branches: [] }
                ]
            },
                { text: 'Yet another branch',
                    branches: [] }
            ]
        };

    angular.module('pinetree', [])
    .constant('treeConfig',
      {
        'branchTemplateUrl': 'demo/branch.html',
        'rootTemplateUrl': 'demo/root.html'
    });

}());
