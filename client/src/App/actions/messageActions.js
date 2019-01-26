import C from 'constants/constants'
const on = (text) => ({
	type: C.MESSAGE_ON,
})

const off = () => ({
	type: C.MESSAGE_OFF
})


const messageActions = {
	on,
	off
}

export default messageActions