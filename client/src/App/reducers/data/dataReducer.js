import { combineReducers } from 'redux'
import C from 'constants/constants'
import itemsReducer from './itemsReducer'
import sortReducer from './sortReducer'
import selectedReducer from './selectedReducer'
import totalReducer from './totalReducer'
import orderReducer from './orderReducer'



const dataReducer = combineReducers({
  items: itemsReducer,
  sort: sortReducer,
  selected: selectedReducer,
  total: totalReducer,
  order: orderReducer
})

export default dataReducer




