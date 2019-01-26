import C from 'constants/constants'

const updateHeight = (state, action) => {
	const {height} = action.payload
	return {
		height
	}
}


const headerReducer = (state={}, action) => {
	switch (action.type) {
		case C.UPDATE_HEADER_HEIGHT:
			return updateHeight(state, action) 
		default:
			return state
	}
}

export default headerReducer




