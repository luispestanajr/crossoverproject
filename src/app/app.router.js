(function() {
    'use strict';

    angular
        .module('CrossOver')
        .config(AppRouter);

    /* @ngInject */
    function AppRouter($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    };
}());
