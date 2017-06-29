(function() {
    'use strict';

    angular
        .module('CrossOver')
        .controller('EntryComponentController', EntryComponentController);

    function EntryComponentController() {
        var $ctrl = this;
        $ctrl.$onInit = _onInit;
        $ctrl.imageIcon = '';

        function _onInit() {
            $ctrl.loading = false;

            $ctrl.imageIcon = 'assets/imgs/' +
                ($ctrl.entry.type === 'firewall' ? 'firewallicon.svg' : 'computericon.svg');
        };
    };
})();
