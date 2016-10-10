module.exports = {
    'debug-js': {
        options: {
            template: '<%= dirs.clientWeb %>/views/source.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.clientWeb %>',
            starttag: '<!-- injector:js_all -->'
        },
        files: {
            '<%= dirs.clientWeb %>/views/layout.dot': [
                '<%= dirs.clientWebLibs %>/highslide.js']
        }
    },
    'debug-css': {
        options: {
            template: '<%= dirs.clientWeb %>/views/layout.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.clientWeb %>/',
            starttag: '<!-- injector:css_all -->'
        },
        files: {
            '<%= dirs.clientWeb %>/views/layout.dot': [
                '<%= dirs.clientWebCompiled %>/bootstrap.css',
                '<%= dirs.clientWebCompiled %>/*.css'
            ]
        }
    },
    'release-js': {
        options: {
            template: '<%= dirs.clientWeb %>/views/source.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.clientBuild %>/web',
            starttag: '<!-- injector:js_all -->'
        },
        files: {
            '<%= dirs.clientBuild %>/web/views/layout.dot': ['<%= dirs.clientBuild %>/web/js/*.js']
        }
    },
    'release-css': {
        options: {
            template: '<%= dirs.clientBuild %>/web/views/layout.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.clientBuild %>/web',
            starttag: '<!-- injector:css_all -->'
        },
        files: {
            '<%= dirs.clientBuild %>/web/views/layout.dot': [
                '<%= dirs.clientBuild %>/web/css/*.css']
        }
    }
};