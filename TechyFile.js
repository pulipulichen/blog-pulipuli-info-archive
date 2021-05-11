module.exports = function() {
    return {
        js: {
            src: '_src/js/**/*.js',
            dest: '_dist/public/myscripts.js'
        },
        css: {
            preprocessor: 'less',
            index: '_css/less/styles.less'
        }
    }
}