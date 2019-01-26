const path = require('path')
module.exports = {


    alias: {
        app: path.resolve(__dirname, '../src/App/'),
        actions: path.resolve(__dirname, '../src/App/actions/'),
        components: path.resolve(__dirname, '../src/App/components/'),
        constants: path.resolve(__dirname, '../src/App/constants/'),
        reducers: path.resolve(__dirname, '../src/App/reducers/'),
        store: path.resolve(__dirname, '../src/App/store/'),
        services: path.resolve(__dirname, '../src/App/services/'),
        utils: path.resolve(__dirname, '../src/App/utils/'),
        langs: path.resolve(__dirname, '../src/App/langs/'),
        middleware: path.resolve(__dirname, '../src/App/middleware/'),
        assets: path.resolve(__dirname, '../../assets')
    },

    indexJS: path.resolve(__dirname, '../src/index.js'),

    indexHTML: path.resolve(__dirname, '../src/index.html'),
    /*
    	название файла добавляемого в index.html
    	при запуске webpack-dev-server mod=development файл хранится в оперативной памяти
    */
    outputFileName: 'main.js'

}