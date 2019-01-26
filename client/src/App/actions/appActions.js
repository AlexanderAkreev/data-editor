import C from 'constants/constants'

const reset = (data) => ({
	type: C.RESET_APP,
})

const appActions = {
	reset,
}

export default appActions