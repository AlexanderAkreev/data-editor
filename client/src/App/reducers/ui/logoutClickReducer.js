import C from 'constants/constants'

const updateState = (state, action) => {
	return state ? false : true
}


const logoutClickReducer = (state={}, action) => {
	switch (action.type) {
		case C.UPDATE_UI_LOGOUT_CLICK_STATE:
			return updateState(state, action) 
		default:
			return state
	}
}

export default logoutClickReducer




