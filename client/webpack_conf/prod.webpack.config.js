/*
	минимальная конфигурация для сборки дистрибутива
*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/*
	импорт общей части для dev и prod конфигураций webpack
*/
const config = require(`./common.webpack.config.js`)
module.exports = {


	/*	файлы, с которых начинается сборка
		@babel/polyfill - обеспечивает кроссбраузерность js
		можно настроить в @babel/env в data-editor-dev/client/.babelrc
	*/
    entry: ["@babel/polyfill", config.indexJS],
    output: {
    	/*
			путь к каталогу, в который собирается дистрибутив
			часть src в тэге script, который HtmlWebpackPlugin добавляет в index.html
    	*/
        path: path.resolve(__dirname, '../dist'),
        /*
			часть src в тэге script, который HtmlWebpackPlugin добавляет в index.html
        */
        publicPath: '',
        /*
			часть src в тэге script, который HtmlWebpackPlugin добавляет в index.html
			название js файлов дистрибутива
        */
        filename: config.outputFileName
    },

    resolve: {
        alias: config.alias
    },

    module: {
        rules: [ //загрузчик для js
            {
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
					css-loader - позволяет webpack правильно интерпертировать css код 
            	*/
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
            } 
        ]
    },

    plugins: [

    	/*
			удаление папки dist перед очередной сборкой
    	*/
	    new CleanWebpackPlugin(['dist'], {
	    	root: path.resolve(__dirname, '..')
	    }),

	    /*
	    	включает source map и 
			позволяет настроить
			замедляет сборку :( 
	    */
	    /*
	    new webpack.SourceMapDevToolPlugin({
	        filename: '[file].map'
	    }),*/

	    /*
			копирует assets в dist
			для сборки на production (через python-скрипт) нужно ВЫКЛЮЧИТЬ,
			иначе в финальной сборке будет два каталога assests
	    */
	    /*new CopyWebpackPlugin([
		    {
		      from: path.resolve(__dirname, '../assets'),
		      to: path.resolve(__dirname, '../dist/assets'),
		    }
		]),*/
        new HtmlWebpackPlugin({
            hash: true,
            template: config.indexHTML, //шаблон html для интеграции с js
            inject: true
        })
    ],

    
    optimization: {
        minimizer: [
        	
			//замедляет сборку :(
	        new UglifyJsPlugin({
	            sourceMap: false,
	            uglifyOptions: {
	                output: {
	                    comments: false,
	                },
	                compress: {
	                    unused: true,
	                    dead_code: true, // big one--strip code that will never execute
	                    warnings: false, // good for prod apps so users can't peek behind curtain
	                    drop_debugger: true,
	                    conditionals: true,
	                    evaluate: true,
	                    drop_console: false, // strips console statements
	                    sequences: true,
	                    booleans: true,
	                }
	            }
	        })
        ]
    }
}
