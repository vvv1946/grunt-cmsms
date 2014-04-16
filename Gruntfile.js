'use strict';
module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	var config = grunt.file.readJSON('./theme-config.json');
	grunt.initConfig({
		
		// project vars
		config: config,
		paths: {
			app: "<%= config.path.app %>",
			dist: '<%= config.path.dist %>',
			theme: '<%= config.path.theme %>',
			tmp: '<%= config.path.tmp %>'
		},

		// php server
		php: {
			options: {
				port: 5001,
				router: 'router.php',
				base: '<%= paths.app %>',
				keepalive: false,
				open: true,
			},
			dist: {
				options: {
					base: '<%= paths.dist %>'
				}
			},
			app: {
				options: {
					base: '<%= paths.app %>'
				}
			}			
		},

		// empty folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'<%= paths.tmp %>',
						'.sass-cache',
						'<%= paths.dist %>/*',
						'!<%= paths.dist %>/.git*'
					]
				}]
			},
			server: '<%= paths.tmp %>'
		},

		// watch files
		watch: {
			js: {
				files: [
					'<%= paths.app %>/themes/<%= paths.theme %>/js/{,*/}*.js'
				],
				tasks: ['jshint']
			},
			grunt: {
				files: ['Gruntfile.js']
			},
			compass: {
				files: ['<%= paths.app %>/themes/<%= paths.theme %>/scss/**/*.{scss,sass}'],
				tasks: ['compass:app','autoprefixer','pixrem:app']
			},
			files: [
				'<%= paths.app %>/themes/<%= paths.theme %>/_includes/{,*/}*.tpl',
				'<%= paths.app %>/themes/<%= paths.theme %>/_layouts/{,*/}*.tpl',
				'<%= paths.app %>/themes/<%= paths.theme %>/_pages/**/*.tpl',
				'<%= paths.app %>/themes/<%= paths.theme %>/css/{,*/}*.css',
				'<%= paths.app %>/themes/<%= paths.theme %>/img/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
			],
			options: {
				livereload: true
			}
		},

		// compass
		compass: {
			options: {
				sassDir: '<%= paths.app %>/themes/<%= paths.theme %>/scss',
				//require: 'susy',
				cssDir: '<%= paths.app %>/themes/<%= paths.theme %>/css',
				generatedImagesDir: '<%= paths.app %>/themes/<%= paths.theme %>/img',
				imagesDir: '<%= paths.app %>/themes/<%= paths.theme %>/img',
				javascriptsDir: '<%= paths.app %>/themes/<%= paths.theme %>/js',
				fontDir: '<%= paths.app %>/themes/<%= paths.theme %>/css/fonts',
				importPath: [
					'<%= paths.app %>/themes/<%= paths.theme %>/bower_components',
					'<%= paths.app %>/themes/<%= paths.theme %>/bower_components/font-awesome/scss'
					],
				httpImagesPath: '/themes/<%= paths.theme %>/img',
				httpGeneratedImagesPath: '/themes/<%= paths.theme %>/generated',
				httpFontsPath: '/themes/<%= paths.theme %>/fonts',
				relativeAssets: false,
				assetCacheBuster: false,
				debugInfo: false,
				outputStyle: 'compressed', //`nested`, `expanded`, `compact`, `compressed`
			},
			app: {
				options: {
					outputStyle: 'expanded'
				}
			},
			dist: {

			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 4 versions']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= paths.app %>/themes/<%= paths.theme %>/css/',
					src: '{,*/}*.css',
					dest: '<%= paths.app %>/themes/<%= paths.theme %>/css/'
				}]
			}
		},

		pixrem: {
			options: {
				rootvalue: '16',
				replace: false
			},
			app: {
				src: '<%= paths.app %>/themes/<%= paths.theme %>/css/main.css',
				dest: '<%= paths.app %>/themes/<%= paths.theme %>/css/main.css' 
			}
		},

		'bower-install': {
			app: {
				html: '<%= paths.app %>/themes/<%= paths.theme %>/_includes/js.tpl',
				ignorePath: '<%= paths.app %>/',
				exclude: [
				/modernizr/,
				'themes/<%= paths.theme %>/bower_components/jquery/']
			}
		},
		rev: {
			dist: {
				files: {
					src: [
						'<%= paths.dist %>/themes/<%= paths.theme %>/js/**/*.js',
						'<%= paths.dist %>/themes/<%= paths.theme %>/css/{,*/}*.css',
						'<%= paths.dist %>/themes/<%= paths.theme %>/img/{,*/}*.{gif,jpeg,jpg,png,webp}',
						'<%= paths.dist %>/themes/<%= paths.theme %>/fonts/{,*/}*.*'
					]
				}
			}
		},

		useminPrepare: {
			options: {
				dest: '<%= paths.dist %>',
				staging: '<%= paths.app %>/tmp'
			},
			html: [
			'<%= paths.app %>/themes/<%= paths.theme %>/_includes/js.tpl',
			'<%= paths.app %>/themes/<%= paths.theme %>/_includes/css.tpl',
			'<%= paths.app %>/themes/<%= paths.theme %>/_layouts/**/*.tpl'
			]
		},

		usemin: {
			options: {
				 assetsDirs: ['<%= paths.dist %>']
			},
			html: ['<%= paths.dist %>/themes/<%= paths.theme %>/**/*.tpl'],
			css: ['<%= paths.dist %>/themes/<%= paths.theme %>/css/{,*/}*.css'],
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= paths.app %>',
					dest: '<%= paths.dist %>',
					src: [
						'*.{ico,png,txt}',
						'*.php',
						'.htaccess',
						'plugins/*',
						'themes/<%= paths.theme %>/img/{,*/}*.webp',
						'themes/<%= paths.theme %>/**/*.tpl',
						'themes/<%= paths.theme %>/_pages/**/*.php',
						'themes/<%= paths.theme %>/fonts/{,*/}*.*'
					]
				}]
			},
			fonts: {
				expand: true,
				dot: true,
				cwd: '<%= paths.app %>/themes/<%= paths.theme %>/bower_components/font-awesome/fonts',
				dest: '<%= paths.app %>/themes/<%= paths.theme %>/fonts/font-awesome/',
				src: '{,*/}*.*'
			},
			css: {
				expand: true,
				dot: true,
				cwd: '<%= paths.app %>/themes/<%= paths.theme %>/css',
				dest: '<%= paths.tmp %>/css/',
				src: '{,*/}*.css'
			}
		},

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= paths.app %>/themes/<%= paths.theme %>/img',
					src: '{,*/}*.{gif,jpeg,jpg,png}',
					dest: '<%= paths.dist %>/themes/<%= paths.theme %>/img'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= paths.app %>/themes/<%= paths.theme %>/img',
					src: '{,/*}*.svg',
					dest: '<%= paths.dist %>/themes/<%= paths.theme %>/img'
				}]
			}
		},

		// run some process in parallel to speed up build
		concurrent: {
			server: [
				'compass:app',
				'copy:css',
				'copy:fonts'
			],
			dist: [
				'compass',
				'copy:css',
				'copy:fonts',
				'imagemin',
				'svgmin'
			]
		}
	
	}); // eo iniConfig
	

	// setup server task
	grunt.registerTask('serve', function (target) {
		if(target === 'dist') {
			return grunt.task.run(['build','php:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			'autoprefixer',
			'php:app',
			'watch'
		]);
	});
	// setup build task
	grunt.registerTask('build', [
		'clean:dist',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'cssmin',
		'uglify',
		'copy:dist',
		'rev',
		'usemin'
	]);
} // eo module.exports