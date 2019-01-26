import C from 'constants/constants'
const updateHeight = (height) => ({
	type: C.UPDATE_CONTROL_BAR_HEIGHT,
	payload: {
		height
	}
})




const controlBarActions = {
	updateHeight
}

export default controlBarActions