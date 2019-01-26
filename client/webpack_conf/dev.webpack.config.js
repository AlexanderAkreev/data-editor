/*
	минимальная конфигурация для разработки
*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
	импорт общей части для dev и prod конфигураций webpack
*/
const config = require(`./common.webpack.config.js`)

module.exports = {
	/*
		webpack будет генерировать source map
	*/
	devtool: 'source-map',

	devServer: {
		port: 9000
	},
	/*	файлы, с которых начинается сборка
		@babel/polyfill - обеспечивает кроссбраузерность js
		можно настроить в @babel/env в data-editor-dev/client/.babelrc
	*/
    entry: ["@babel/polyfill", config.indexJS],
    output: {
        /*
			часть src в тэге script, который HtmlWebpackPlugin добавляет в index.html
        */
        publicPath: '',
        /*
			часть src в тэге script, который HtmlWebpackPlugin добавляет в index.html
        */
        filename: config.outputFileName
    },

    resolve: {
        alias: config.alias
    },
    module: {
        rules: [ 
            {	//загрузчик для js
                test: /\.js?$/, // определяем тип файлов
                exclude: /(node_modules)/, // исключаем из обработки папку node_modules
                loader: "babel-loader"

            }, {
                test: /\.(html)$/,

                use: []

            }, { 
                test: /\.(png|jpg|gif|svg|mp4|woff|woff2|eot|ttf|otf|ico|pdf)$/,
                use: [{
                	//нужен для корректной работы с файлами
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]' //имя файла в продакшн сборке
                    }
                }]
            },
            {	/*	загрузчики работают как конвейер справа налево
					style-loader - добавляет тэг <style> со стилями в DOM 

					css-loader - позволяет webpack правильно рабоать с css кодом 
            	*/
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
            } 
        ]
    },

    plugins: [
    	//new webpack.DefinePlugin({ 'process.env.MODE': JSON.stringify(`${env.MODE}`) }),

        new HtmlWebpackPlugin({
            hash: true,
            template: config.indexHTML, //шаблон html для интеграции с js
            inject: true
        })
    ]
}
