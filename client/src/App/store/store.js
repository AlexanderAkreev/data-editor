import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools   } from 'redux-devtools-extension/developmentOnly'
import appReducer from 'reducers/appReducer'
import initialState from './initialState'
import loader from 'middleware/loader'


/*
	ПО, которое отрабатывает, при любом action
*/
const middlewares = [loader, thunk];

/*
	в зависимости от MODE, заданном при запуске webpack, 
	включаем и отключаем логер 
*/
if (MODE === `dev`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}


const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const store = createStore(
	appReducer,
	initialState,
	composeEnhancers(
	  applyMiddleware(...middlewares)
	)
)

export default store