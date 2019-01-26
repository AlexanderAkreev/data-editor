import C from 'constants/constants'

const authorized = (userId, token) => ({
	type: C.AUTHORIZED,
	payload: {
		userId, 
		token
	}
})

const reset = () => ({
	type: C.RESET_USER
})

const userActions = {
	authorized,
	reset
}

export default userActions