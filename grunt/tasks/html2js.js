module.exports = {
    'client': {
        options: {
            base: '<%= dirs.clientBuildTemp %>/tmpl/',
            module: 'client-templates'
        },
        src: ['<%= dirs.clientBuildTemp %>/tmpl/**/*.html'],
        dest: '<%= dirs.clientBuildTemp %>/templates.js'
    }
};