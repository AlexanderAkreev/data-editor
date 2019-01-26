import C from 'constants/constants'


const update = (state, action) => {
	const {total} = action.payload
	return total		
}


const totalReducer = (state=0, action) => {
	switch (action.type) {
		case C.UPDATE_DATA_TOTAL:
			return update(state, action) 
		default:
			return state
	}
}


export default totalReducer




