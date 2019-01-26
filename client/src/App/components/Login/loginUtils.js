export const sanitizeStr = (str, sign) => {

	return str.replace(new RegExp('\\' + sign, 'g'), '')

}


export const hidePass = (pass, sign) => {
	let newPass = ''
	for(let x = 0; x < pass.length; x++) {
		newPass += sign
	}
	return newPass
}

export const getNewPass = (prevPass, nextPass) => {
	const nextLen = nextPass.length
	const prevLen = prevPass.length
	let newPass = ''
	if(nextLen > prevLen) {
		newPass = prevPass  + sanitizeStr(nextPass, '*')
	} 
	if(nextLen < prevLen) {
		newPass = prevPass.slice(0, nextLen)
	}
	return newPass
}


const loginUtils = {
	hidePass,
	getNewPass
}

export default loginUtils