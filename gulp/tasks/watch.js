var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
  watch('./app/assets/scripts/**/*.js' , function() {
    gulp.start('scripts');
  })
  watch('./app/assets/images/icons/*.svg' , function() {
    gulp.start('icons');
  })
  
});

gulp.task('cssInject', ['styles', 'styles-checkout'], function() {
  return true;
});


