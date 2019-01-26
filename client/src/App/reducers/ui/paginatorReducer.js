import { combineReducers } from 'redux'
import C from 'constants/constants'

const update = (state, action) => {
	const {pageIndex, itemsOnPage} = action.payload
	return {...state, pageIndex, itemsOnPage}
}


const paginatorReducer = (state={}, action) => {
	switch (action.type) {
		case C.UPDATE_PAGINATOR:
			return update(state, action) 
		default:
			return state
	}
}

export default paginatorReducer




