import { combineReducers } from 'redux'
import C from 'constants/constants'
import {user} from 'store/initialState'

const authorized = (state, action) => {
	const {userId, token} = action.payload
	return {
		...state, 
		userId, 
		token, 
		authorized: true
	}
}

const reset = (state, action) => ({...user})


const userReducer = (state={}, action) => {
	switch (action.type) {
		case C.AUTHORIZED:
			return authorized(state, action) 
		case C.RESET_USER:
			return reset(state, action) 
		default:
			return state
	}
}

export default userReducer




