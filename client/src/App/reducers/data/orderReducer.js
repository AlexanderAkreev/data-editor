import C from 'constants/constants'
const R = require('ramda')

const update = (state, action) => {
	const {idList} = action.payload
	return R.union(state, idList)
}



const orderReducer = (state=[], action) => {
	switch (action.type) {
		case C.UPDATE_DATA_ITEMS_ORDER:
			return update(state, action) 
		default:
			return state
	}
}



export default orderReducer




