(function() {
    'use strict';

    angular
        .module('CrossOver')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController($stateParams, BuildService) {
        var $ctrl = this;
        $ctrl.$onInit = _onInit;
        $ctrl.openItem = _openItem;
        $ctrl.items = [];
        $ctrl.opennedItemBuild = {};

        function _openItem(item){
            if(item.status === 'Pending' || item.status === 'Running')
                return;


            $ctrl.opennedItemBuild = $ctrl.opennedItemBuild === item.buildNum ? 0 : item.buildNum;
        }

        function _onInit() {
            BuildService.getBuilds()
                .then(function(data){
                    $ctrl.items = data;
                });
        }
    };
})();
