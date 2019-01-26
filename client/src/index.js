import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from 'components/App/appContainer'
import store from 'store/store'


/*
	отображение DOM-элементов, сгенерированных React, в app-container
*/
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app-container')
)
