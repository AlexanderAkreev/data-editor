import { combineReducers } from 'redux'
import userReducer from 'reducers/userReducer'
import requestReducer from 'reducers/requestReducer'
import authReducer from 'reducers/authReducer'
import uiReducer from 'reducers/ui/uiReducer'
import dataReducer from 'reducers/data/dataReducer'
import applicationReducer from 'reducers/applicationReducer'
import errorReducer from 'reducers/errorReducer'


const rootReducer = combineReducers({
  user: userReducer,
  request: requestReducer,
  auth: authReducer,
  ui: uiReducer,
  data: dataReducer,
  application: applicationReducer,
  error: errorReducer
})

export default rootReducer