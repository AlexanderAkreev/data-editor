import { combineReducers } from 'redux'
import C from 'constants/constants'

const on = (state, action) => {
	return true
}
const off = (state, action) => {
	return false
}

const loaderReducer = (state={}, action) => {
	switch (action.type) {
		case C.LOADER_ON:
			return on(state, action) 
		case C.LOADER_OFF:
			return off(state, action) 
		default:
			return state
	}
}

export default loaderReducer




