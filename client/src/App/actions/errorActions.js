import C from 'constants/constants'

const updateError = (text) => ({
	type: C.UPDATE_ERROR_TEXT,
	payload: {
		text
	}
})


const errorActions = {
	updateError
}

export default errorActions