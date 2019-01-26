/*
что это и зачем:
	- Этот модуль описывает все начальное состояние приложения.
	- Используется в store/store
	- Во время работы части состояния меняется с помощью ответственных reducers
*/


/*
user:
	что это и зачем:
		- часть store, которая отвечает за состояние пользователя
	ответственный reducer:
		- reducers/userReducer	
	authorized:
		что это и зачем: 
			- поле, показывающее, что пользователь авторизован
	token: 
		что это и зачем: 
			- уникальная строка, генерируемая сервером при успешной авторизации
			- хранится в базе во время сессии
			- если сессия закончилась, автоматически сбрасывается
			- используется при любых запросах к серверу для проверки права на действие			
	userId:
		что это и зачем: 
			- идентификатор пользователя, который выдается ему при регистрации
			- используется для поддержания сессии и проверок авторизации
*/
export const user = {
	authorized: false,		
	token: null,
	userId: null
} 


/*
auth:
	что это и зачем:
		- часть store, которая отвечает за состояние процесса авторизации
	ответственный reducer:
		- reducers/authReducer		
	loginFailure:
		что это и зачем:
			- поле, показывающее результат попытки авторизации
			- может использоваться для вывода сообщения при неудачной попытке
*/
export const auth = {
	loginFailure: false,
}


/*
request:
	что это и зачем:
		- часть store, которая отвечает за состояние любых запросов к серверу 		
	ответственный reducer:
		- reducers/requestReducer
	fetching:
		что это и зачем:
			- список, содержащий названия текущих запросов (из constants/constants)
			- запросы удаляются из списка при получении ответа со статусом 200
			- может использоваться для отображения окна ожидания (middleware/loader)
	errors:
		что это и зачем:
			- список, содержащий названия запросов (из constants/constants), 
			  завершившихся ошибкой (статус != 200 или сервер не доступен)
			- может использоваться для отображения сообщений об ошибке в окне ожидания (middleware/loader)
*/
export const request = {
	fetching: [],
	errors: []
}



/*
application:
	что это и зачем:
		- часть store, которая сохраняет состояние полей ввода на странице заявки на возврат/обмен
		- эти ключи используются в Application/applicationModel
		  и Application/applicationTitles
	ответственный reducer:
		- reducers/applicationReducer
*/
export const application = {
	orderNumber: null,
	operationType: null,
	customerName: null,
	docType: null,
	passportNumSerial: null,
	passportReceiveDate: null,
	passportIssuedBy: null,
	returnGoods: null,
	returnGoodsCount: null,
	lotNumber: null,
	returnCause: null,
	goodState: null,
	checkNumber: null,
	purchaseDate: null,
	purchasePlace: null,
	returnSum: null,
	paymentMethod: null,
	accountHolderName: null,
	bankName: null,
	bic: null,
	correspondentAccount: null,
	transactionAccount: null,
	exchangeGoods: null,
	exchangeGoodsCount: null,
	exchangeCause: null,
	forWhatExchange: null,
	howExchange: null,
	exchangeDate: null,
	exchangeTime: null,
	deliveryAddress: null,
	exchangeAddress: null,

}


/*
ui:
	что это и зачем:
		- часть store, которая отвечает за визуальное состояние приложения
	ответственный reducer:
		- reducers/ui/uiReducer
		- комбинированный, то есть состоит из нескольких reducer
	application:
		что это и зачем:
			- часть store, которая отвечает за визуальное состояние страницы заявки на возврат/обмен
		ответственный reducer:
			- reducers/ui/applicationReducer
		appState:
			что это и зачем:
				- отвечает за визуальное состояние страницы заявки на возврат/обмен
				- если не null, то приложение отображает страницу редактирования или создания заявки
			возможные значения:
				- 'edit'
				- 'create'
				- null
		operationType:
			что это и зачем:
				- отвечает за визуальное состояние страницы заявки на возврат/обмен
				- от этого значения зависит, какие поля отобразятся на странице редактирования или создания заявки
			возможные значения:
				- 'exchange'
				- 'returns'
				- null
*/
export const ui = {
	loader: false,
	message: false, 
	paginator: {
		pageIndex: 0,
		items: [5, 10, 20],
		itemsOnPage: 5,				
	},
	controlBar: {
		height: 0
	},
	header: {
		height: 0
	},

	application: {
		appState: null,
		operationType: null
	},

	logoutClick: false
}

/*
data:
	что это и зачем:
		- часть store, которая отвечает за данные по заявкам, получаемые с сервера
	ответственный reducer:
		- reducers/data/dataReducer
		- комбинированный
	total:
		что это и зачем:
			- общее число записей в БД о заявках
			- используется в paginator
		ответственный reducer:
			- reducers/data/totalReducer
	order:
		что это и зачем:
			- список идентификаторов записей
			- нужен чтобы сохранить порядок данных, полученных с сервера
			- используется, чтобы получать значения ассоциативного массива items в верном порядке при пагинации
		ответственный reducer:
			- reducers/data/orderReducer
*/
export const data = {
	items: {}, // {[id] : {id, ...}}
	sort: [],  //{sortField, sortType}
	selected: [],// [id2, id3, id1 ...]
	total: 0, 
	order: [], // [id1, id2, id3 ...]
}


/*
error:
	что это и зачем:
		- часть store, которая хранит текст ошибок, связанных с ответом сервера
		- если ошибки нет, то равно null
		- используется для отображения сообщения с текстом ошибки на странице
	ответственный reducer:
		- reducers/errorReducer
*/
export const error = null



const initialState = {
	user,
	auth,
	request,
	ui,
	data,
	application
}


export default initialState

