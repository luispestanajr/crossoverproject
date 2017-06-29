(() => {
    'use strict';

    describe('Service: ConfigurationService', () => {
        application.initModule();

        var ConfigurationService,
            baseUrl;

        beforeEach(inject(($injector) => {
            ConfigurationService = $injector.get('ConfigurationService');
            baseUrl = $injector.get('configuration').baseUrl;
        }));
    });
})();
