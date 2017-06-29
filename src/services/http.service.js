(function() {
    'use strict';

    angular
        .module('CrossOver')
        .service('HttpService', HttpService);

    /* @ngInject */
    function HttpService($http, $rootScope, configuration, usSpinnerService) {
        this.get = get;
        this.post = post;
        this.put = put;

        var codigoOrigem = _verificaCodigoOrigem($rootScope.codigoOrigem);

        // metodos privados
        function _erro(erro) {
            usSpinnerService.stop('spinner-content');
            console.error('Erro: ', erro);
            throw erro;
        };

        function _sucesso(data, status, headers, config) {
            usSpinnerService.stop('spinner-content');
            return data.data;
        };

        function _verificaCodigoOrigem(codigo) {
            return (codigo) ? codigo : configuration.codigoOrigem;
        };

        // metodos publicos
        function get(url, parametros) {
            usSpinnerService.spin('spinner-content');
            var urlFormatada = url;

            return $http.get(urlFormatada, { params: parametros })
                .then(_sucesso)
                .catch(_erro);
        };

        function post(url, parametros) {
            usSpinnerService.spin('spinner-content');
            parametros.CodigoOrigem = codigoOrigem;

            return $http.post(url, parametros)
                .then(_sucesso)
                .catch(_erro);
        };

        function put(url, parametros) {
            usSpinnerService.spin('spinner-content');
            return $http.put(url, parametros)
                .then(_sucesso)
                .catch(_erro);
        };
    };
})();
