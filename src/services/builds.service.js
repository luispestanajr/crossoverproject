(function() {
    'use strict';

    angular
        .module('CrossOver')
        .service('BuildService', BuildService);

    /* @ngInject */
    function BuildService(HttpService, ConfigurationService) {
        var urlBuildsJsonFile = ConfigurationService.urlBuildsJsonFile;

        this.getBuilds = _getBuilds;

        function _getBuilds() {
            return HttpService.get(urlBuildsJsonFile);
        };
    };
})();
