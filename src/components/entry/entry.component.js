(function() {
    'use strict';

    angular
        .module('CrossOver')
        .component('coEntry', {
            templateUrl: 'components/entry/entry.template.html',
            controller: 'EntryComponentController',
            controllerAs: '$ctrl',
            bindings: {
                entry: '<',
                opennedItemBuild: '='
            }
        });
})();



