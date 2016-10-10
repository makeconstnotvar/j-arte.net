module.exports = {
    'client': {
        src: ['<%= dirs.clientBuildTemp %>/script.js'],
        dest: '<%= dirs.clientBuild %>/web/js/script.min.js'
    }
};