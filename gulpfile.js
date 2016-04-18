var gulp = require('gulp'),
	nodemon = require('nodemon');

gulp.task('default', function () {
	nodemon({
		script: 'server.js',
		ext: 'js',
		env: {
			port: 8000
		},
		ignore: ['./node_modules/**']
	})
	.on('restart', function(){
		console.log("something changed, restarting");
	})
})