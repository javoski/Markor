const gulp = require('gulp')
const webpack = require('webpack')
const gulpWebpack = require('webpack-stream')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

gulp.task('codemirror', () => {
    return gulp.src('libs/codemirror/mode/**/*.js')
        .pipe(concat('mode.js'))
        .pipe(uglify())
        .pipe(gulp.dest('libs/codemirror/'))
})
gulp.task('pack', () => {
    return gulp.src('./renderer.js')
        .pipe(gulpWebpack({
            output: {
                filename: 'build.js'
            },
            plugins: [new webpack.NoErrorsPlugin()]
        }))
        .pipe(gulp.dest('dist/'))
})
gulp.task('default', () => {
    gulp.watch('./renderer.js', ['pack'])
})