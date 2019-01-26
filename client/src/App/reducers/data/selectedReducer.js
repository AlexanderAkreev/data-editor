import { combineReducers } from 'redux'
import C from 'constants/constants'
const R = require('ramda')

const add = (state, action) => {
	const {itemId} = action.payload
	if(state.indexOf(itemId) == -1) {
		state = [...state]
		state.push(itemId)
		return state	
	}	
	return state		
}

const remove = (state, action) => {
	const {itemId} = action.payload
	if(state.indexOf(itemId) != -1) {
		return state.filter((id)=>id !== itemId)
	}
	return state
}

const addAll = (state, action) => {
	const {idList} = action.payload
	const difference = R.difference(idList, state)
	if(difference.length) {
		return R.union(state, idList)	
	}	
	return state		
}

const removeAll = (state, action) => {
	const {idList} = action.payload
	return R.difference(state, idList)		
}



const sortReducer = (state={}, action) => {
	switch (action.type) {
		case C.ADD_SELECTED_DATA:
			return add(state, action) 
		case C.REMOVE_SELECTED_DATA:
			return remove(state, action) 
		case C.REMOVE_ALL_SELECTED_DATA:
			return removeAll(state, action) 
		case C.ADD_ALL_SELECTED_DATA:
			return addAll(state, action) 
		default:
			return state
	}
}


export default sortReducer




