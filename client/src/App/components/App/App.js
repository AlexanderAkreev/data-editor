import React from 'react'
import { Normalize } from 'styled-normalize'
import GlobalStyle from 'components/GlobalStyle/GlobalStyle'
import AppStyle from './AppStyle'
import Login from 'components/Login/loginContainer'
import Header from 'components/MainPage/Header/headerContainer'
import MainPage from 'components/MainPage/mainPageContainer'
import Loader from 'components/Loader/loaderContainer'
import Message from 'components/Message/messageContainer'


const App = (props) => {

	const {user, loader, logoutClick, message, error} = props
	const {authorized} = user


	return (
		<React.Fragment>
			<Normalize/>
			<GlobalStyle/>
			<AppStyle>
				<Header/>
				{!authorized && <Login/>}
				{authorized && <MainPage/>}
				{loader && <Loader/>}
				{message && logoutClick && <Message type='logout'/>}
				{message && error && <Message type='error'/>}
			</AppStyle>
		</React.Fragment>
	)
}

export default App