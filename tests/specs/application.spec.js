'use strict';

var application = {
    initModule: function initModule() {
        beforeEach(() => {
            module('CrossOver');
        });
    }
};

describe('Module: CrossOver', () => {
    var module,
        dependencies = [];

    const hasModule = module => dependencies.indexOf(module) >= 0;

    application.initModule();

    it('Defined Modules', () => {
        expect(hasModule('CrossOver')).toBeDefined();
    });
});
