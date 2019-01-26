import { combineReducers } from 'redux'
import C from 'constants/constants'
import {request} from 'store/initialState'
const R = require('ramda')

const error = (state, action) => {
	const {errorType} = action.payload
	let {errors} = state
	if(errors.indexOf(errorType) === -1) {
		errors = R.clone(errors)
		errors.push(errorType)
		return {...state, errors}
	}
	return state
}

const fetching = (state, action) => {
	const {requestType} = action.payload
	let {fetching} = state
	if(fetching.indexOf(requestType) === -1) {
		fetching = R.clone(fetching)
		fetching.push(requestType)
		return {...state, fetching}
	}
	return state
}

const success = (state, action) => {
	const {requestType} = action.payload
	let {fetching} = state
	fetching = fetching.filter((type)=>type!==requestType)
	return {...state, fetching}
}


const reset = (state, action) => ({...request})


const requestReducer = (state={}, action) => {
	switch (action.type) {
		case C.REQUEST_FETCHING:
			return fetching(state, action) 
		case C.REQUEST_SUCCESS:
			return success(state, action) 
		case C.REQUEST_ERROR:
			return error(state, action) 		
		case C.RESET_REQUEST:
			return reset(state, action) 
		default:
			return state
	}
}

export default requestReducer




