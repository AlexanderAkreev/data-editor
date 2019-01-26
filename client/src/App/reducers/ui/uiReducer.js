import { combineReducers } from 'redux'
import loaderReducer from './loaderReducer'
import messageReducer from './messageReducer'
import paginatorReducer from './paginatorReducer'
import controlBarReducer from './controlBarReducer'
import headerReducer from './headerReducer'
import applicationReducer from './applicationReducer'
import logoutClickReducer from './logoutClickReducer'


const uiReducer = combineReducers({
  loader: loaderReducer,
  message: messageReducer,
  paginator: paginatorReducer,
  controlBar: controlBarReducer,
  header: headerReducer,
  application: applicationReducer,
  logoutClick: logoutClickReducer
})

export default uiReducer