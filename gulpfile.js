var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver'),
    mochaPhantomJS = require('gulp-mocha-phantomjs'),
    del = require('del'),
    path = require('path'),
    glob = require("glob"),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    mold = require('mold-source-map');

var browserifyScenarioList = {
    singlejs_espowerify: {
        srcFile: './test/node/js_array_test.js',
        transform: ['espowerify']
    },
    multijs_espowerify: {
        srcFile: './test/node/*_test.js',
        transform: ['espowerify']
    },
    singlecoffee_coffeeify_espowerify: {
        srcFile: './test/node/coffee_array_test.coffee',
        transform: ['coffeeify', 'espowerify']
    },
    multicoffee_coffeeify_espowerify: {
        srcFile: './test/node/*_test.coffee',
        transform: ['coffeeify', 'espowerify']
    },
    mixture_coffeeify_espowerify: {
        srcFile: './test/node/*_test.{js,coffee}',
        transform: ['coffeeify', 'espowerify']
    },
    singlees6_espowerify: {
        srcFile: './test/es6/es6_array_test.js',
        transform: ['es6ify', 'espowerify']
    }
};


Object.keys(browserifyScenarioList).forEach(function (scenarioName) {
    var scenario = browserifyScenarioList[scenarioName];
    var destDir = './build/' + scenarioName;
    gulp.task('clean_' + scenarioName, function (done) {
        del([destDir], done);
    });
    gulp.task('setup_' + scenarioName, ['clean_' + scenarioName], function () {
        return gulp.src('./test/html/test-browserify.html')
            .pipe(gulp.dest(destDir));
    });
    gulp.task('build_' + scenarioName, ['clean_' + scenarioName], function() {
        var files = glob.sync(scenario.srcFile);
        var b = browserify({entries: files, debug: true});
        scenario.transform.forEach(function (t) {
            b.transform(t);
        });
        return b.bundle()
            .pipe(mold.transformSourcesRelativeTo(__dirname))
            .pipe(source('all_test.js'))
            .pipe(gulp.dest(destDir));
    });
    gulp.task('test_' + scenarioName, ['build_' + scenarioName], function () {
        return gulp
            .src(path.join(destDir, 'test-browserify.html'))
            .pipe(mochaPhantomJS({reporter: 'dot'}));
    });
    gulp.task(scenarioName, [
        'clean_' + scenarioName,
        'setup_' + scenarioName,
        'build_' + scenarioName,
        'test_' + scenarioName
    ]);
});


gulp.task('serve', function() {
    gulp.src(__dirname)
        .pipe(webserver({
            port: 9001,
            directoryListing: true
        }));
});
