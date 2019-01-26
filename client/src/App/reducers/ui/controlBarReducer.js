import C from 'constants/constants'

const updateHeight = (state, action) => {
	const {height} = action.payload
	return {
		height
	}
}


const controlBarReducer = (state={}, action) => {
	switch (action.type) {
		case C.UPDATE_CONTROL_BAR_HEIGHT:
			return updateHeight(state, action) 
		default:
			return state
	}
}

export default controlBarReducer




