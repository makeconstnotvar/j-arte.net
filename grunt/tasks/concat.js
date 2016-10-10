module.exports = {
    'client-js': {
        src: [
            '<%= dirs.shared %>/libs/angular.js',
            '<%= dirs.shared %>/libs/angular-router.js',
            '<%= dirs.shared %>/libs/angular-animate.js',
            '<%= dirs.shared %>/libs/angular-sanitize.js',
            '<%= dirs.shared %>/*.js',
            '<%= dirs.clientWeb %>/app/modules.js',
            '<%= dirs.clientWeb %>/app/index.js',
            '<%= dirs.clientBuildTemp %>/templates.js',
            '<%= dirs.clientWeb %>/app/seo/*.js',
            '<%= dirs.clientWeb %>/app/**/*.js'
        ],
        dest: '<%= dirs.clientBuildTemp %>/script.js'
    },
    'client-css': {
        src: [
            '<%= dirs.shared %>/css/bootstrap.css',
            '<%= dirs.shared %>/css/*.css',
            '<%= dirs.clientBuildTemp %>/css/**/*.css'
        ],
        dest: '<%= dirs.clientBuildTemp %>/styles.css'
    }
};