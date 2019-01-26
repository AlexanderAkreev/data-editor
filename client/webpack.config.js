/*
	загрузка кофигурации в зависимости от переменных --env  
*/

const webpack = require('webpack');
const HOST_PROD = '192.168.0.24/data-editor-prod'
const HOST_DEV = 'data-editor-dev'
const RESET_URL = '//'
const ENTRY_POINT = '/index.php'
const ENTRY_POINT_DEV = RESET_URL + HOST_DEV + '/server' + ENTRY_POINT
const ENTRY_POINT_PROD = RESET_URL + HOST_PROD + ENTRY_POINT


module.exports = (env) => {
	let WEB_API = null
	switch(env.MODE) {
		case 'dev':
			WEB_API = ENTRY_POINT_DEV
			break;
		case 'prod':
			WEB_API = ENTRY_POINT_PROD
			break;
	}
	const config = require(`./webpack_conf/${env.MODE}.webpack.config.js`)

	/*
		добавление глобальных переменных
		они будут доступны внутри любого скрипта
	*/
	config.plugins.push(
		new webpack.DefinePlugin({ 
				
			'WEB_API' : JSON.stringify(WEB_API),
			'MODE' : JSON.stringify(env.MODE),


		}),
	)
    return config
}