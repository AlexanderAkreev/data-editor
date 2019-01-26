import React from 'react'
import LoaderStyle from './LoaderStyle'
const uniq = require('uniqid')




const Loader = ({request}) => {
	const {errors, fetching} = request

	const errorMessages = errors.map((mes) => <div key={uniq()} className='message'>{mes}</div>)
	const fetchingMessages = fetching.map((mes) => <div key={uniq()} className='message'>{mes}</div>)

	return (
		<LoaderStyle>
			<div className='loader'>
				<div className='fetching'>
					<div className='title'>
						FETCHING:
					</div>
					<div className='messages'>
						{fetchingMessages}
					</div>					
				</div>
				<div className='errors'>
					<div className='title'>
						ERRORS:
					</div>
					<div className='messages'>
						{errorMessages}
					</div>	
				</div>
			</div>
		</LoaderStyle>
	)
}
		
		

export default Loader
