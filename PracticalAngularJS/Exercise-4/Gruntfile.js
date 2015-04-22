'use strict';

module.exports = function(grunt) {

	var path = require('path');

	// Configurable paths for the application
	var appConfig = {
		app: require('./bower.json').appPath || 'app',
		dist: 'dist',
        maven: 'dist'
	};
	
    // Project configuration.
    grunt.initConfig({
 
		pkg: grunt.file.readJSON('package.json'),
		
        html2js: {
            options: {
                base: 'test',
                module: 'templates',
                singleModule: true,
                useStrict: true,
                htmlmin: {
                  collapseBooleanAttributes: true,
                  collapseWhitespace: true,
                  removeAttributeQuotes: true,
                  removeComments: true,
                  removeEmptyAttributes: true,
                  removeRedundantAttributes: true,
                  removeScriptTypeAttributes: true,
                  removeStyleLinkTypeAttributes: true
                }
            },
            main: {
                src: ['test/unit/**/*.html'],
                dest: 'test/unit/templates.js'
            }
        },
        
        bower: {
		    dev: {
                dest: './app/lib',
                css_dest: './app/lib',
                options: {
                    expand: true,
                    packageSpecific: {
                        bootstrap: {
                          files: [
                            "dist/fonts/glyphicons-halflings-regular.*",
                            "dist/css/*.*",
							"dist/js/*.*" 
                          ]
                        }
                    }
                }
            }
		},

		karma: {
			unit: {
				configFile: 'test/karma.conf.js',
				autoWatch: true
			}
		}
    });

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-html2js');
    
	// Default task.
	grunt.registerTask('test', ['html2js:main', 'karma']);
    
};
