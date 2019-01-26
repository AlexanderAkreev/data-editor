const R = require('ramda')


export const pxToNum = (px) => {
	return Number(px.replace('px', ''))
}

export const isElementNode = (anything) => {
	if(
		anything &&
		R.type(anything) === 'Object' &&
		anything.nodeType === Node.ELEMENT_NODE) {
		return true
	}
	return false
}