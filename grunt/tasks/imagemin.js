module.exports = {
    'client-release': {
        options: {
            progressive: false
        },
        files: [{
            expand: true,
            cwd: '<%= dirs.clientWeb %>/img',
            src: ['**/*.jpg'],
            dest: '<%= dirs.clientBuild %>/web/img'
        }]
    }
};