const path = require ('path')

module.exports = {
    entry: './src/index.js',
    output: {
        //Dirname é o diretório original. O segundo parâmetro é onde a saída será gerada
        path: path.resolve(__dirname, 'dist'),

        //Arquivo final do projeto
        filename: 'bundle.js'
    }
}