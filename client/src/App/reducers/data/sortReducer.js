import { combineReducers } from 'redux'
import C from 'constants/constants'
const R = require('ramda')

const update = (state, action) => {
	const {sortField, sortType} = action.payload
	const field = R.find(R.propEq('sortField', sortField))(state)
	if(!field) {
		state = [...state]
		state.push({
			sortField,
			sortType
		})
		return state	
	}	
	if(field.sortType !== sortType) {
		field.sortType = sortType
		return [...state]	
	}

	return state		
}

const remove = (state, action) => {
	const {sortField} = action.payload
	const field = R.find(R.propEq('sortField', sortField))(state)
	if(!field) {
		return state
	}
	return state.filter((sort)=>sort.sortField !== sortField)
}


const sortReducer = (state={}, action) => {
	switch (action.type) {
		case C.UPDATE_DATA_SORT:
			return update(state, action) 
		case C.REMOVE_DATA_SORT:
			return remove(state, action) 
		default:
			return state
	}
}


export default sortReducer




