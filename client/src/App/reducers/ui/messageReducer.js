import { combineReducers } from 'redux'
import C from 'constants/constants'

const on = (state, action) => {
	return true
}
const off = (state, action) => {
	return false
}

const messageReducer = (state={}, action) => {
	switch (action.type) {
		case C.MESSAGE_ON:
			return on(state, action) 
		case C.MESSAGE_OFF:
			return off(state, action) 
		default:
			return state
	}
}

export default messageReducer




