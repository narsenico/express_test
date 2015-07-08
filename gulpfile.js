var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('serve', function() {
	//
	server.run(['app.js']);
	//
	gulp.watch(['app/**/*'], function(event) { server.notify(event); } );
});

gulp.task('default', ['serve']);