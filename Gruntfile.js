module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%=pkg.name %> <%= grunt.template.today("yyy-mm-dd") %> */ \n'
            },
            first: {
                files: [{
                    expand: true,
                    cwd: 'public/js',
                    src: ['**/*.js', '!**/*-min.js'],
                    dest: 'public/js/',
                    ext: '-min.js'
                }]
            }
        },
        jshint: {
            options: {
                unused: true,
                curly: true
            },
            node: {
                options: {
                    node: true,
                    strict: true
                },
                files: {
                    src: ['controllers/*.js', 'helpers/*.js', 'models/*.js'],
                }
            },
            client: {
                options: {
                    undef: true,
                    jquery: true,
                    browser: true
                },
                files: {
                    src: ['public/js/*.js', '!public/js/*-min.js'],
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};