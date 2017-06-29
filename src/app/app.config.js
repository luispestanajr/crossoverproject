(function() {
    'use strict';

    angular
        .module('CrossOver')
        .config(AppConfig);

    /* @ngInject */
    function AppConfig($locationProvider, usSpinnerConfigProvider, configurationProvider) {
        $locationProvider.html5Mode(true);
    };
}());
