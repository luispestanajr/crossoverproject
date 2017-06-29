(function() {
    'use strict';

    angular
        .module('CrossOver')
        .controller('HeaderComponentController', HeaderComponentController);

    function HeaderComponentController() {
        var $ctrl = this;
        $ctrl.$onInit = _onInit;

        function _onInit() {
            $ctrl.loading = false;
        };
    };
})();
