import React from 'react'
import LabelStyle from './LabelStyle'



const Label = (props) => {

	const {required, children, className} = props

	return (
		<LabelStyle className={`label ${className ? className : ''}`}>			
			{children}
			{required && <sup className='sup'>*</sup>}			
		</LabelStyle>
	)
}


export default Label