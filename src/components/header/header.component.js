(function() {
    'use strict';

    angular
        .module('CrossOver')
        .component('coHeader', {
            templateUrl: 'components/header/header.template.html',
            controller: 'HeaderComponentController',
            controllerAs: '$ctrl'
        });
})();
