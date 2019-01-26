import { combineReducers } from 'redux'
import C from 'constants/constants'
import {auth} from 'store/initialState'

const loginFailure = (state, action) => ({
	...auth, 
	loginFailure: true
})


const reset = (state, action) => ({
	...auth
})

const authReducer = (state={}, action) => {
	switch (action.type) {
		case C.LOGIN_FAILURE:
			return loginFailure(state, action) 
		case C.RESET_AUTH:
			return reset(state, action) 
		default:
			return state
	}
}


export default authReducer




