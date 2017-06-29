'use strict';

angular
    .module('CrossOver')
    .config(HomeRouter);

/* @ngInject */
function HomeRouter($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'conteudo': {
                    controller: 'HomeController as $ctrl',
                    templateUrl: '/pages/home/home.template.html'
                }
            }
        });
};
