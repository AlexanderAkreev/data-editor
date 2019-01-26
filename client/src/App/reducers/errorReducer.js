import C from 'constants/constants'


const update = (state, action) => {
	const {text} = action.payload
	return text		
}


const errorReducer = (state=null, action) => {
	switch (action.type) {
		case C.UPDATE_ERROR_TEXT:
			return update(state, action) 
		default:
			return state
	}
}


export default errorReducer




