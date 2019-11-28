var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('basla', function () {
  gulp.watch('themes/hugo-future-imperfect/assets/**/*.scss', gulp.series('css'));
});



gulp.task('css', () => {
  return gulp.src('./themes/hugo-future-imperfect/assets/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('themes/hugo-future-imperfect/static/css/'))
});

// themes/hugo-future-imperfect/static/css/style.css

gulp.task('default', gulp.parallel('basla', 'css'));