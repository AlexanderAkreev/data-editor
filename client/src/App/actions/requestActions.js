import C from 'constants/constants'

const error = (errorType) => ({
	type: C.REQUEST_ERROR,
	payload: {
		errorType
	}
})

const fetching = (requestType) => ({
	type: C.REQUEST_FETCHING,
	payload: {
		requestType
	}
})

const success = (requestType) => ({
	type: C.REQUEST_SUCCESS,
	payload: {
		requestType
	}
})

const reset = () => ({
	type: C.RESET_REQUEST
})

const requsetActions = {
	error,
	fetching,
	success,
	reset
}

export default requsetActions