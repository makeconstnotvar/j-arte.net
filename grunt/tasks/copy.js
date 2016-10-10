module.exports = {
    'client-debug': {
        files: [
            {
                expand: true,
                cwd: '<%= dirs.shared %>/libs/',
                src: ['**/*.js'],
                dest: '<%= dirs.clientWebTemp %>/libs/'
            },
            {
                expand: true,
                cwd: '<%= dirs.shared %>/css/',
                src: ['*.css'],
                dest: '<%= dirs.clientWebTemp %>/css/libs/'
            },
            {
                expand: true,
                cwd: '<%= dirs.shared %>/entities/',
                src: ['**/*.js'],
                dest: '<%= dirs.clientWebTemp %>/entities/'
            },
            {
                expand: true,
                cwd: '<%= dirs.shared %>/',
                src: ['*.js'],
                dest: '<%= dirs.clientWebTemp %>'
            }
        ]
    },
    'client-release': {
        files: [
            {
                expand: true,
                cwd: '<%= dirs.clientWeb %>',
                src: ['*.js','*.json'],
                dest: '<%= dirs.clientBuild %>/web/'
            },
            {
                expand: true,
                cwd: '<%= dirs.clientWeb %>/views/',
                src: ['**/*.dot', '!layout.dot', '!source.dot'],
                dest: '<%= dirs.clientBuild %>/web/views/'
            },
            {
                expand: true,
                cwd: 'market/client/',
                src: ['*.*'],
                dest: '<%= dirs.clientBuild %>'
            },
            {
                expand: true,
                cwd: 'market/api/',
                src: ['**/*'],
                dest: 'build/api/'
            },
            {
                expand: true,
                cwd: 'market',
                src: ['*.js','*.ico','*.json'],
                dest: 'build'
            },
            {
                expand: true,
                cwd: 'market/client/router/',
                src: ['**/*'],
                dest: '<%= dirs.clientBuild %>/router/'
            }
        ]
    }
};