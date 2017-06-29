(function() {
    'use strict';

    angular
        .module('CrossOver')
        .service('ConfigurationService', ConfigurationService);

    /* @ngInject */
    function ConfigurationService($http, configuration) {
        this.urlBuildsJsonFile = '/data/builds.json';
    };
})();
