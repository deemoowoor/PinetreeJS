(function() {
    'use strict';

    angular.module('pinetree.services.storage', [])
    .factory('pinetreeLocalStorage', ['$window', '$rootScope', function($window, $rootScope) {
            var service = {
                model: {},

                storageType: 'localStorage',
                store: 'pinetreeStore',

                saveState: function() {
                    $window[service.storageType][service.store] = angular.toJson(service.model);
                },

                loadState: function() {
                    service.model = angular.fromJson($window[service.storageType][service.store]);
                }
            };

            $rootScope.$on('savestate', service.saveState);
            $rootScope.$on('loadstate', service.loadState);

            if ($window.localStorage.pinetreeStore) {
                service.loadState();
            }

            return service;
        }])
    .run(['$rootScope', '$window', function($rootScope, $window) {
        $window.onbeforeunload = function(event) {
            $rootScope.$broadcast('savestate');
        };
    }]);

}());
