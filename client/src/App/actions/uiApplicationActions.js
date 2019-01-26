import C from 'constants/constants'

const updateState = (appState, token) => ({
	type: C.UPDATE_UI_APPLICATION_STATE,
	payload: {
		appState
	}
})

const updateOperationType = (operationType, token) => ({
	type: C.UPDATE_UI_APPLICATION_OPERATION_TYPE,
	payload: {
		operationType
	}
})

const reset = () => ({
	type: C.RESET_UI_APPLICATION
})

const uiApplicationActions = {
	updateState,
	updateOperationType,
	reset
}

export default uiApplicationActions