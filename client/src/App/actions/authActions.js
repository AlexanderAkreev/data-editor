import C from 'constants/constants'

const loginFailure = () => ({
	type: C.LOGIN_FAILURE
})


const reset = () => ({
	type: C.RESET_AUTH
})


const authActions = {
	loginFailure,
	reset
}


export default authActions