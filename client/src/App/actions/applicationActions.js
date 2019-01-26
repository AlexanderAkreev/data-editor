import C from 'constants/constants'

const updateData = (data) => ({
	type: C.UPDATE_APPLICATION_DATA,
	payload: {
		...data
	}
})

const reset = (saveFields=[]) => ({
	type: C.RESET_APPLICATION,
	payload: {
		saveFields
	}

})



const applicationActions = {
	updateData,
	reset
}

export default applicationActions