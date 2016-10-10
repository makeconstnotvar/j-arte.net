module.exports = {
    'client-templates': {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [
            {
                expand: true,
                cwd: '<%= dirs.clientWeb %>/app/',
                src: ['**/*.html'],
                dest: '<%= dirs.clientBuildTemp %>/tmpl/'
            }
        ]
    },
    'client-views': {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [
            {
                expand: true,
                cwd: '<%= dirs.clientBuild %>/web/views',
                src: ['*.dot'],
                dest: '<%= dirs.clientBuild %>/web/views'
            }
        ]
    }

};