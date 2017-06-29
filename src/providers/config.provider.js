(function() {
    'use strict';

    angular
        .module('CrossOver')
        .provider('configuration', configurationProvider);

    function configurationProvider() {
        var dev = /^dev\./,
            hmg = /^hmg\./,
            hmgInterno = /^hmg-/,
            host = location.hostname,
            local = /^localhost/,
            localIp = /^10\.17\.2\./,
            CODIGO_OPERADORA = 0,
            DOMINIO = {
                dev: '//localhost:52220',
                homolog: '//hmg.crossover.com',
                prod: 'https://www.croosover.com'
            },
            ENV = setAmbiente(host),
            CODIGO_ORIGEM = {
                dev           : '',
                homolog       : '',
                homologInterno: '',
                prod          : ''
            },
            TOKEN = {
                dev           : '9ec365a9a6664414ac8927b1bda4744c',
                homolog       : 'c787dc81a50b467ca19d9eba7572c684',
                homologInterno: 'c787dc81a50b467ca19d9eba7572c684',
                prod          : 'c325452a3cf7473e85d375faca1ee812'
            };

        // metodos publicos
        function setAmbiente(ambiente) {
            if (local.test(ambiente) || localIp.test(ambiente) || dev.test(ambiente)) {
                return 'dev';
            } else if (hmg.test(ambiente)) {
                return 'homolog';
            } else if (hmgInterno.test(ambiente)) {
                return 'homologInterno';
            }

            return 'prod';
        };

        function getDados() {
            return Object.freeze({
                codigoOrigem: CODIGO_ORIGEM[ENV],
                codigoOperadora: CODIGO_OPERADORA,
                token: TOKEN[ENV],
                baseUrl: DOMINIO[ENV]
            });
        };

        return {
            setAmbiente: setAmbiente,
            $get: getDados
        };
    };
}());
