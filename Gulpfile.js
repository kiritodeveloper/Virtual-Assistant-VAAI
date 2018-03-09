var gulp = require('gulp'),
    minify = require('gulp-minify'),
    validator = require('gulp-jsvalidate'),
    nodemon = require('gulp-nodemon'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    argv = require('yargs').argv,
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

/************************************************
 ********* Arrays to contain all scripts sources
 ************************************************/
var libraries = [
    './app/libraries/jquery-modern/dist/jquery.js',
    './app/libraries/angular-modern/angular.js',
    './app/libraries/angular-modern-route/angular-route.js',
    './app/libraries/angular-modern-touch/angular-touch.js',
    './app/libraries/react-modern/react-with-addons.js',
    './app/libraries/react-modern/react-dom.js'
];

var librariesie = [
    './app/libraries/es5-shim/es5-shim.js',
    './app/libraries/es5-shim/es5-sham.js',
    './app/libraries/jquery-legacy/dist/jquery.js',
    './app/libraries/angular-legacy/angular.js',
    './app/libraries/angular-legacy-route/angular-route.js',
    './app/libraries/angular-legacy-touch/angular-touch.js',
    './app/libraries/react-modern/react-with-addons.js',
    './app/libraries/react-modern/react-dom.js'
];

var files = [
    // Flux
    './app/flux/dispatcher.js',
    './app/flux/store.js',
    './app/flux/actions.js',
    // Generals
    './app/general/requestAnimation.js',
    './app/general/reactTags.js',
    './app/general/homeData.js',
    // Components
    './app/components/menu.js',
    './app/components/header.js',
    './app/components/footer.js',
    './app/components/slider.js',
    './app/components/dictionary.js',
    './app/components/vicky.js',
    './app/components/brands.js',
    './app/components/menumicuenta.js',
    './app/components/textbox.js',
    './app/components/calendar.js',
    './app/components/signup.js',
    './app/components/socialModule.js',
    './app/components/dynamicSelecter.js',
    './app/components/services.js',
    './app/components/card.js',
    './app/components/dynamicBanner.js',
    './app/components/shes.js',
    './app/components/carrito.js',
    './app/components/listEvents.js',
    './app/components/listProducts.js',
    './app/components/listStores.js',
    
    


    // Views
    './app/views/home.js',
    './app/views/sam/sam.js',
    './app/views/login/ingresar.js',
    './app/views/login/registro.js',
    './app/views/login/recuperacion.js',
    //Nosotros
    './app/views/nosotros/vicky.js',
    './app/views/nosotros/mision.js',
    './app/views/nosotros/vision.js',
    './app/views/nosotros/terminos.js',
    // APP nail
    './app/views/appnail/app.js',
    //Mi cuenta
    './app/views/micuenta/informacion.js',
    './app/views/micuenta/edicion.js',
    './app/views/micuenta/notificacion.js',
    './app/views/micuenta/bloqueados.js',
    './app/views/micuenta/eliminar.js',
    //Prices
    './app/views/prices/main.js',
    // App
    './app/app.js',
    // Directives
    './app/directives.js',
    // Controllers
    './app/controllers/copilot.js',
    './app/controllers/home.js',

    './app/controllers/ingresar.js',
    './app/controllers/registro.js',
    './app/controllers/recuperacion.js',
    //nosotros
    './app/controllers/vicky.js',
    './app/controllers/vision.js',
    './app/controllers/mision.js',
    './app/controllers/terminos.js',
    // App Controllers
    './app/controllers/appnail.js',
    './app/controllers/carrito.js',
    './app/controllers/account.js',
    './app/controllers/prices.js',
    
    // Routes
    './app/router.js',
];

/************************************************
 ********* Function to minify and save files
 ************************************************/
var make = function(sources, fileName) {
    gulp.src(sources)
        .pipe(concat(fileName + '.js'))
        //.pipe(minify({ext: {src:'-dev.js', min:'.js'}, noSource: true }))
        .pipe(gulp.dest('./scripts'))
        .pipe(notify({ title: 'Gulp', subtitle: 'Success', message: 'Successfully built for ' + fileName + '.js', sound: 'Pop' }));
}

/************************************************
 ********* Task to minify files
 ************************************************/

// Vendors task
gulp.task('libraries', function() {
    make(libraries, 'libraries');
    console.log('building libraries file...');
});

// Vendors IE task
gulp.task('librariesie', function() {
    make(librariesie, 'vendorie');
    console.log('building librariesie file...');
});

// General task
gulp.task('copilot', function() {
    make(files, 'copilot');
    console.log('building copilot file...');
});

// Sass task
gulp.task('sass', function() {
    gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./css'))
        .pipe(notify({ title: 'Gulp', subtitle: 'Success', message: 'Successfully built main.css', sound: 'Pop' }));
});

/************************************************
 ********* Watchers
 ************************************************/
gulp.task('watch', function() {
    gulp.watch(['./app/**/*.js'], ['copilot']);
    gulp.watch(['./app/sass/**/*.scss'], ['sass']);
});

/************************************************
 ********* Task to start the server
 ************************************************/
gulp.task('server', function() {
    nodemon({
        script: (argv.d) ? 'devServer.js' : 'server.js',
        task: ['watch', 'sass']
    });
});

/************************************************
 ********* Task to deploy all files
 ************************************************/
gulp.task('build', ['libraries', 'librariesie', 'copilot', 'sass'], null);

/************************************************
 ********* Default task
 ************************************************/
gulp.task('default', ['watch', 'server']);