import React from 'react'
import ApplicationStyle from './ApplicationStyle'
import {OrangeButton, GeneralButton} from 'components/Button/Button'  
import {CancelIcon} from 'components/Icon/Icon'
import PersonalPart from './PersonalPart'
import ExchangePart from './ExchangePart'
import ReturnsPart from './ReturnsPart'
import Message from 'components/Message/messageContainer'

import {pxToNum} from 'utils/commonUtils'


const R = require('ramda')

class Application extends React.Component{

	state = {
		minHeight: 0,
	}

	constructor(props) {
	    super(props)
	   	this.update = this.update.bind(this)
	}

	componentDidMount() {
		const {header} = this.props
		const bodyH = pxToNum(window.getComputedStyle(document.body).minHeight)
		const appHeaderH = pxToNum(window.getComputedStyle(this.appHeader).height)
		const appFooterH = pxToNum(window.getComputedStyle(this.appFooter).height)
		const minHeight = bodyH - header.height - appHeaderH - appFooterH
		this.setState({
			minHeight
		})
	}


	update(key) {  //НУЖНО НЕ СБРАСЫВАТЬ PERSONAL PART В APPLICATION 
		const {updateData} = this.props
		return (value) => {
			updateData({[key] : value})
		}
	}

	render() {
		const {
				cancelApplication, 
				header,
				uiApplication,
				message,
				logoutClick
		} = this.props
		const {state, update} = this
		const {minHeight} = state		

		const {operationType} = uiApplication

		return (
			<ApplicationStyle minHeight={minHeight}>
				<div className='application-header'
					ref={(node)=>this.appHeader=node}
				>
					<div className='title'>Создать заявку</div>
					<CancelIcon className='icon cancel' onClick={cancelApplication}/>
				</div>
				<div className='application-main'>
					<PersonalPart update={update}/>
					{!operationType && 
						<div className='no-operation-type'>
							Выберите тип операции, чтобы продолжить заполнение заявки
						</div>
					}
					{operationType === 'exchange' && 
						<ExchangePart update={update}/>
					}
					{operationType === 'returns' && 
						<ReturnsPart update={update} />
					}
				</div>
				<div 
					className='application-footer'
					ref={(node)=>this.appFooter=node}
				>				
					<GeneralButton className='button cancel' onClick={cancelApplication}>
						Отменить
					</GeneralButton>

					<div className='right'>
						<div className='text'>
							<sup className='sup'>*</sup> - обязательно к заполнению
						</div>
						<OrangeButton className='button create'>
							Создать заявку
						</OrangeButton>
					</div>
					
				</div>
				{message && !logoutClick && <Message type='application'/>}
			</ApplicationStyle>
		)
	}
}

export default Application



