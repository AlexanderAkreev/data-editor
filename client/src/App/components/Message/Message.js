import React from 'react'
import renderHTML from 'react-render-html';
import MessageStyle from './MessageStyle'
import {OrangeButton, SimpleButton} from 'components/Button/Button'



/*

	выводит предупреждение при попытке выйти из приложения
*/
const LogoutMessage = (props) => {

	const {
		closeLogoutMessage,
		logoutHandler,
		type
	} = props

	return (
		<div className={`message-box ${type}`}>
			<div className='title'>
				Вы уверены, что хотите выйти?
			</div>
			<div className='buttons'>
				<SimpleButton className='button continue' onClick={closeLogoutMessage}>
					Нет
				</SimpleButton>
				<OrangeButton className='button cancel' onClick={logoutHandler}>
					Да
				</OrangeButton>
			</div>
		</div>		
	)

}


/*
	используется, если формат данных ответа сервера отличен от JSON
	(НАПРИМЕР: сервер прислал текст ошибки в PHP)
*/
const ErrorMessage = (props) => {

	const {type, error} = props

	return (
		<div className={`message-box ${type}`}>
			<div className='title'>
				Ошибка
			</div>
			<div className='text'>
				{renderHTML(error)}
			</div>
		</div>		
	)

}

/*
	выводит предупреждение при попытке закрыть заявку без сохранения
*/
const ApplicationMessage = (props) => {

	const {
		cancelApplication,
		closeApplicationMessage,
		application,
		logoutHandler,
		logoutClick,
		type
	} = props

	return (
		<div className={`message-box ${type}`}>
			<div className='title'>
				Отменить создание заявки?
			</div>
			<div className='text'>
				Вы уверены что хотите отменить создание заявки?
				<br/>
				Все заполненые поля будут удалены
			</div>
			<div className='buttons'>
				<SimpleButton className='button continue' onClick={closeApplicationMessage}>
					Продолжить создание заявки
				</SimpleButton>
				<OrangeButton className='button cancel' onClick={cancelApplication}>
					Отменить создание заявки
				</OrangeButton>
			</div>
		</div>		
	)

}


const Message = (props) => {

	const {type} = props

	return (
		<MessageStyle className='message'>			
			{type === 'application' && <ApplicationMessage {...props}/>}	
			{type === 'logout' && <LogoutMessage {...props}/>}	
			{type === 'error' && <ErrorMessage {...props}/>}	
		</MessageStyle>
	)

}

export default Message