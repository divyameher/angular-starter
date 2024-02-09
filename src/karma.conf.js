// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-coverage'),
        ],
        preprocessors: {
            'modules/**/!(*module|*app).js': 'coverage'
        },
        files: [],
        reporters: [
            'coverage'
        ],
        coverageReporter: {
            dir: require('path').join(__dirname, '../coverage'),
            subdir: '.',
            reporters: [{
                type: 'cobertura',
                subdir: '.'
            },
            { type: 'html' },
            { type: 'text-summary' }],
            fixWebpackSourcePaths: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        browserNoActivityTimeout: 100000,
        concurrency: Infinity
    });
};
