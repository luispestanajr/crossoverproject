(function() {
    'use strict';

    angular
        .module('CrossOver')
        .run(AppRun);

    var dataLayer = window.dataLayer = window.dataLayer || [];
    /* @ngInject */
    function AppRun($rootScope, $location) {
        var executaTracking = $rootScope.$on('$stateChangeSuccess', function() {
            dataLayer.push({
                event: 'ngRouteChange',
                attributes: {
                    route: $location.path()
                }
            });
        });
    };
}());
