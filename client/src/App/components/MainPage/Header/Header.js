import React from 'react'
import HeaderStyle from './HeaderStyle'
import {AddButton, LogoutButton, CancelButton} from 'components/Button/Button'
import {pxToNum} from 'utils/commonUtils'

class Header extends React.Component {

	constructor() {
		super()
	}

	componentDidMount() {
		const {updateHeight} = this.props
		const style = window.getComputedStyle(this.header)
		updateHeight(pxToNum(style.height))
	}

	render() {

		const {
			user, 
			logoutHandler, 
			createApplication,
			application,
			cancelApplication
		} = this.props
		const {authorized} = user

		return (
			<HeaderStyle ref={(node)=>{this.header = node}}>
				<header className='header'>
					{authorized && 
						<React.Fragment>
							{!application.appState && 
								<AddButton className='button add' onClick={createApplication}>
									Добавить заявку
								</AddButton>
							}
							{application.appState && 
								<CancelButton className='button cancel' onClick={cancelApplication}>
									Отменить
								</CancelButton>
							}
							<LogoutButton 
								className='button logout' 
								onClick={logoutHandler}
							>
								Выход
							</LogoutButton>
						</React.Fragment>				
					}
				</header>
			</HeaderStyle>
		)
	}
	

}

export default Header



