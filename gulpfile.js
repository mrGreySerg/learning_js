// подключаем все плагины gulp
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const del = require("del");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

// работаем с scss и перебрасываем в build
function scssToCss(){
    return gulp.src('./src/scss/**/*.scss')
            .pipe(sourcemaps.init()) //История изменения стилей, которая помогает нам при отладке в devTools.
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(rename('style.css'))
            .pipe(gulp.dest('./build/css'))
            .pipe(browserSync.stream())
};

// работаем с html и перебрасываем в build
function htmlBuild(){
    return gulp.src("./src/*.html")
            .pipe(gulp.dest("./build/"))
            .pipe(browserSync.stream()) 
};

function jsBuild(){
    return gulp.src("./src/js/*.js")
            .pipe(rename("buildJS.js"))
            .pipe(gulp.dest("./build/js"))
            .pipe(browserSync.stream())
}

// очищаем папку build
function clean(){
    return del(['./build/*'])
};

// function запускающая собранный проект в папке build в chrome
function openBrowser(){
    return browserSync.init({
        server: {
            baseDir: './build'
        },
        notify: false,
        browser: 'chrome'
    })
};

// следим за изменениями в файлах и выполняем функции при изменении
function watch(){
    gulp.watch('./src/*.html', htmlBuild)
    gulp.watch('./src/js/*.js', jsBuild)
    gulp.watch('./src/scss/**/*.scss', scssToCss)
};

// test tasks
gulp.task('scss', scssToCss);
gulp.task('html', htmlBuild);
gulp.task('jsBuild', jsBuild);
gulp.task('del', clean);
gulp.task('open_browser', openBrowser);

// отслеживаем изменение файлов и изменяем в build, но без синхронизации с browser.
gulp.task('watch', watch); 

gulp.task('initial', gulp.series('del', 'scss','html', 'jsBuild', 'open_browser'));

gulp.task('default', gulp.parallel('initial', 'watch'));