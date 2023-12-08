module.exports = function (grunt) {

    // Configuração do Grunt
    grunt.initConfig({
        // Configuração para a tarefa de minificação
        uglify: {
            options: {
                // Opções de configuração para a minificação
                mangle: false
            },
            my_target: {
                // Arquivos de origem que serão minificados
                files: {
                    'dist/app.min.js': ['src/*.js']
                }
            }
        }
    });

    // Carregando o plugin de minificação
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefa padrão do Grunt
    grunt.registerTask('default', ['uglify']);
};