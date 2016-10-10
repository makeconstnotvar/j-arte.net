module.exports = {
    'debug': {
        options: {
            sourcemap: 'none'
        },
        files: [
            {
                expand: true,
                cwd: '<%= dirs.clientWebCss %>',
                src: ['bootstrap-custom.scss'],
                dest: '<%= dirs.clientWebCompiled %>',
                ext: '.css',
                rename:()=>'<%= dirs.clientWebCompiled %>/bootstrap.css'
            },
            {
                expand: true,
                cwd: '<%= dirs.clientWebCss %>',
                src: ['*.scss'],
                dest: '<%= dirs.clientWebCompiled %>',
                ext: '.css'
            }
        ]
    }
};