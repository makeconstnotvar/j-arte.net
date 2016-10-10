module.exports = {
    'client': {
        files: [{
            expand: true,
            cwd: '<%= dirs.clientBuildTemp %>/',
            src: ['*.css'],
            dest: '<%= dirs.clientBuild %>/web/css/',
            ext: '.min.css'
        }],
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1,
            keepSpecialComments: 0
        }
    }
};