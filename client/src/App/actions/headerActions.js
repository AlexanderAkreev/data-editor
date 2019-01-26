import C from 'constants/constants'
const updateHeight = (height) => ({
	type: C.UPDATE_HEADER_HEIGHT,
	payload: {
		height
	}
})




const headerActions = {
	updateHeight
}

export default headerActions