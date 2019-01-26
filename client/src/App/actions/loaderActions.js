import C from 'constants/constants'
const on = (text) => ({
	type: C.LOADER_ON,
})

const off = () => ({
	type: C.LOADER_OFF
})


const loaderActions = {
	on,
	off
}

export default loaderActions