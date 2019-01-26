import React from 'react'
import Loadable from 'react-loadable'




const MainPage = (props) => {
	const {
		componentsFetching,
		componentsFetchingSuccess,
		componentsFetchingError
	} = props

	const Loading = ({error}) => {
		return (
			<div></div>
		)
	}

	const Loader = async (props) => {
		componentsFetching()
		try {
			const component = await import('./LoadablePart')
			componentsFetchingSuccess()
			return component
		} catch(err) {
			componentsFetchingError()
			console.error(err)
		}
	}
		
	const LoadableMainPage = Loadable({
	  loader: Loader, 
	  loading: Loading
	})


	return <LoadableMainPage/>

}







export default MainPage





	 



