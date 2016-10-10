module.exports = [
    'clean:admin-release',
    'clean:client-release',

    'htmlmin:admin-templates',
    'htmlmin:client-templates',

    'html2js:admin',
    'html2js:client',

    'concat:admin-js',
    'concat:client-js',
        
    'less:client-release',
    
    'concat:admin-css',
    'concat:client-css',
    
    'uglify:admin',
    'uglify:client',
    
    'cssmin:admin',
    'cssmin:client',
    
    'copy:admin-release',
    'copy:client-release',

    'imagemin:client-release',

    'injector:admin-release-js',
    'injector:client-release-js',
    
    'injector:admin-release-css',
    'injector:client-release-css',
    
    'htmlmin:admin-views',
    'htmlmin:client-views',
    
    'clean:admin-temp',
    'clean:client-temp'
];