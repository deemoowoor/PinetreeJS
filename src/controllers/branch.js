(function() {
    'use strict';

    var module = angular.module('pinetree.controller', [])
    .constant('KeyEvents', { Esc: 27, Enter: 13 });

    function makeTreeCtrl() {
        return ['$scope', '$element', '$compile', 'KeyEvents',
            function($scope, $element, $compile, KeyEvents) {
                this.scope = $scope;
                $scope.edit = false;
                $scope.element = $element;

                var template;
                this.template = function(tpl) {
                    if (tpl) {
                        template = tpl;
                    } else {
                        return template;
                    }
                };

                $scope.init = function(parentCtrl) {
                };

                // Add an empty child
                $scope.addItem = function(b) {
                    if (!angular.isDefined(b.branches)) {
                        b.branches = [];
                    }

                    b.branches.push({ label: '', edit: true, branches: [] });
                };

                // Remove a child
                $scope.removeItem = function(b) {
                    if (!angular.isDefined($scope.branch.branches)) {
                        $scope.branch.branches = [];
                        return;
                    }

                    var branches = $scope.branch.branches;
                    branches.splice(branches.indexOf(b), 1);
                };

                // Toggle child expansion
                $scope.toggleItem = function(branch) {
                    if (branch.branches.length === 0){
                        return;
                    }
                    branch.collapsed = !(branch.collapsed || false);
                };

                $scope.isCollapsed = function(branch) {
                    return branch.collapsed;
                };

                $scope.editMode = function(branch) {
                    branch.edit = true;
                };

                $scope.submitEdit = function(branch) {
                    branch.edit = false;
                };

                $scope.toggleEdit = function(branch) {
                    branch.edit = !(branch.edit || false);
                };

                $scope.onKey = function($event, branch) {
                    if ($event.keyCode == KeyEvents.Enter || $event.keyCode == KeyEvents.Esc) {
                        $scope.submitEdit(branch);
                    }
                };

            }];
    }

    module.controller('ptTreeCtrl', makeTreeCtrl())
    .controller('ptBranchCtrl', makeTreeCtrl());
}());
