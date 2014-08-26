var gulp = require('gulp'),
    gutil = require('gulp-util'),
    taskListing = require('gulp-task-listing'),
    webserver = require('gulp-webserver'),
    mochaPhantomJS = require('gulp-mocha-phantomjs'),
    del = require('del'),
    path = require('path'),
    concat = require('gulp-concat'),
    gulpConcatSourceMap = require('gulp-concat-sourcemap'),
    coffee = require('gulp-coffee'),
    ts = require('gulp-type'),
    typescript = require('gulp-tsc'),
    espower = require('gulp-espower'),
    sourcemaps = require('gulp-sourcemaps'),
    glob = require('glob'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    mold = require('mold-source-map');

var browserifyScenario = {
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
    },
    single_ts_espowerify: {
        srcFile: './test/node/typescript_array_test.ts',
        plugins: ['tsify'],
        transform: ['espowerify']
    },
    multi_ts_espowerify: {
        srcFile: './test/node/*_test.ts',
        plugins: ['tsify'],
        transform: ['espowerify']
    }
};

var gulpScenario = {
    gulp_espower: {
        srcFile: './test/web/*_test.js',
        html: './test/html/separated/test.html',
        plugins: [espower()]
    },
    gulp_concat_espower: {
        srcFile: './test/web/*_test.js',
        html: './test/html/concat/test.html',
        plugins: [concat('all_test.js'), espower()]
    },
    gulp_espower_concat: {
        srcFile: './test/web/*_test.js',
        html: './test/html/concat/test.html',
        plugins: [espower(), concat('all_test.js')]
    },
    gulp_coffee_espower: {
        srcFile: './test/web/*_test.coffee',
        html: './test/html/separated_coffee/test.html',
        plugins: [coffee(), espower()]
    },
    gulp_coffee_espower_custom: {
        srcFile: './test/web/*_test.coffee',
        html: './test/html/separated_coffee/test.html',
        plugins: [coffee({sourceRoot: path.join(__dirname, 'test/web/')}), espower()]
    },
    gulp_coffee_espower_concat: {
        srcFile: './test/web/*_test.coffee',
        html: './test/html/concat/test.html',
        plugins: [coffee(), espower(), concat('all_test.js')]
    },
    gulp_typescript_espower1: {
        srcFile: './test/web/*_test.ts',
        html: './test/html/separated_ts/test.html',
        plugins: [typescript({sourcemap: true}), espower()]
    },
    gulp_typescript_espower2: {
        srcFile: './test/web/*_test.ts',
        html: './test/html/separated_ts/test.html',
        plugins: [
            function (stream) {
                return stream.pipe(ts()).js;
            },
            espower()
        ]
    },
    gulp_typescript_espower_concat1: {
        srcFile: './test/web/*_test.ts',
        html: './test/html/concat/test.html',
        plugins: [typescript({sourcemap: true}), espower(), concat('all_test.js')]
    },
    gulp_typescript_espower_concat2: {
        srcFile: './test/web/*_test.ts',
        html: './test/html/concat/test.html',
        plugins: [typescript({sourcemap: true, out: path.join(__dirname, 'build/gulp/gulp_typescript_espower_concat2/') + 'all_test.js'}), espower()]
    },
    gulp_typescript_espower_concat3: {
        srcFile: './test/web/*_test.ts',
        html: './test/html/concat/test.html',
        plugins: [
            function (stream) {
                return stream.pipe(ts()).js;
            },
            espower(),
            concat('all_test.js')
        ]
    },
    gulp_typescript_espower_concat4: {
        srcFile: './test/web/*_test.ts',
        html: './test/html/concat/test.html',
        plugins: [
            function (stream) {
                return stream.pipe(ts()).js;
            },
            espower(),
            gulpConcatSourceMap('all_test.js')
        ]
    }
};

Object.keys(gulpScenario).forEach(function (scenarioName) {
    var scenario = gulpScenario[scenarioName];
    var destDir = './build/gulp/' + scenarioName;
    gulp.task('clean:' + scenarioName, function (done) {
        del([destDir], done);
    });
    gulp.task('setup:' + scenarioName, ['clean:' + scenarioName], function () {
        return gulp.src(scenario.html)
            .pipe(gulp.dest(destDir));
    });
    gulp.task('build:' + scenarioName, ['setup:' + scenarioName], function() {
        var stream;
        stream = gulp.src(scenario.srcFile);
        stream = stream.pipe(sourcemaps.init());
        scenario.plugins.forEach(function (p) {
            if (typeof p === 'function') {
                stream = p(stream);
            } else {
                stream = stream.pipe(p);
            }
        });
        stream = stream.pipe(sourcemaps.write());
        // stream = stream.pipe(sourcemaps.write({
        //     includeContent: true,
        //     sourceRoot: function(file) {
        //         return path.relative(__dirname, file.base);
        //     }
        // }));
        stream = stream.pipe(gulp.dest(destDir));
        return stream;
    });
    gulp.task('test:' + scenarioName, ['build:' + scenarioName], function () {
        return gulp
            .src(path.join(destDir, 'test.html'))
            .pipe(mochaPhantomJS({reporter: 'dot'}));
    });
    gulp.task(scenarioName, [
        'clean:' + scenarioName,
        'setup:' + scenarioName,
        'build:' + scenarioName,
        'test:' + scenarioName
    ]);
});

Object.keys(browserifyScenario).forEach(function (scenarioName) {
    var scenario = browserifyScenario[scenarioName];
    var destDir = './build/browserify/' + scenarioName;
    gulp.task('clean:' + scenarioName, function (done) {
        del([destDir], done);
    });
    gulp.task('setup:' + scenarioName, ['clean:' + scenarioName], function () {
        return gulp.src('./test/html/browserify/test.html')
            .pipe(gulp.dest(destDir));
    });
    gulp.task('build:' + scenarioName, ['setup:' + scenarioName], function() {
        var files = glob.sync(scenario.srcFile);
        var b = browserify({entries: files, debug: true});
        if (scenario.plugins) {
            scenario.plugins.forEach(function (p) {
                b.plugin(p);
            });
        }
        scenario.transform.forEach(function (t) {
            b.transform(t);
        });
        return b.bundle()
            .pipe(mold.transformSourcesRelativeTo(__dirname))
            .pipe(source('all_test.js'))
            .pipe(gulp.dest(destDir));
    });
    gulp.task('test:' + scenarioName, ['build:' + scenarioName], function () {
        return gulp
            .src(path.join(destDir, 'test.html'))
            .pipe(mochaPhantomJS({reporter: 'dot'}));
    });
    gulp.task(scenarioName, [
        'clean:' + scenarioName,
        'setup:' + scenarioName,
        'build:' + scenarioName,
        'test:' + scenarioName
    ]);
});

gulp.task('clean', function (done) {
    del(['./build'], done);
});

gulp.task('build_all_browserify', Object.keys(browserifyScenario).map(function (name){ return 'build:' + name; }));

gulp.task('build_all_gulp', Object.keys(gulpScenario).map(function (name){ return 'build:' + name; }));

gulp.task('serve', function() {
    gulp.src(__dirname)
        .pipe(webserver({
            port: 9001,
            directoryListing: true
        }));
});

gulp.task('help', taskListing.withFilters(/:/));
