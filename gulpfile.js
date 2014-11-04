// var gulp = require('gulp');
// var header = require('gulp-header');

var gulp = require('gulp'),
	header = require('gulp-header'),
	pkg = require('./package.json');

var banner = ['/**',
  ' * <%= pkg.description %>',
  ' * v<%= pkg.version %>',
  ' * <%= pkg.license %> licensed',
  ' * Copyright (C) 2014 Wouter Verweirder',
  ' */',
  ''].join('\n');

gulp.task('default', function(){
	var watcher = gulp.watch('js/src/**/*.js', ['scripts']); 
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + 
event.type + ', running tasks...');
	}); 
});

// gulp.task('scripts', function(){
// 	gulp.src('js/src/**/*.js')
// 		.pipe(gulp.dest('js'));
// });

gulp.task('scripts', function(){ 
	gulp.src('js/src/**/*.js')
		// .pipe(header('//copyright Wouter Verweirder, 2014c')) 
		.pipe(header( banner, { pkg: pkg }))
		.pipe(gulp.dest('js'));
});

// gulp.task('default', function(){ 
// 	gulp.watch('js/src/**/*.js', ['scripts']);
// });
