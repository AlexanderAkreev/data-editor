import C from 'constants/constants'


const add = (state, action) => {
	const {data} = action.payload
	return {...state, ...data}
}



const itemsReducer = (state={}, action) => {
	switch (action.type) {
		case C.ADD_DATA_ITEMS:
			return add(state, action) 
		default:
			return state
	}
}



export default itemsReducer




