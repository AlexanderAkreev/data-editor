import React from 'react'
import LoginStyle from './LoginStyle'
import {LoginButton} from 'components/Button/Button'
import loginUtils from './loginUtils'


class Login extends React.Component {
	state = {
    	password:  '',
		login: '',
	    hiddenPass: '',
		passHidden: true 
	}

	constructor() {
	    super()
	    this.sendForm = this.sendForm.bind(this)
	    this.hidePassword = this.hidePassword.bind(this)
	    this.showPassword = this.showPassword.bind(this)
	    this.changeHandler = this.changeHandler.bind(this)
	}

	componentDidMount() { 
		this.loginInput.focus()
	}

	sendForm() {
		const {login, password} = this.state
		this.props.loginHandler(login, password)
	}

	submitHandler(e) {
		e.preventDefault()
	}

	changeHandler(e) {
		const {name, value} = e.target
		const {password, passHidden} = this.state
		if(name === 'login') {
			this.setState({
				login: value
			})
		} else {
			if(passHidden) {
				const newPass = loginUtils.getNewPass(password, value)			
				this.setState({
					password: newPass,
					hiddenPass: loginUtils.hidePass(newPass, '*')
				})
			} else {
				this.setState({
					password: value,
				})
			}				
		}
	}

	hidePassword() {
		const {password} = this.state
		this.setState({
			passHidden: true,
			hiddenPass: loginUtils.hidePass(password, '*')
		})
		this.passInput.focus()
	}

	showPassword() {
		const {password} = this.state
		this.setState({
			passHidden: false,
			hiddenPass: ''
		})
		this.passInput.focus()
	}


	render() {
		const {password, passHidden, hiddenPass, login} = this.state
		return (
			<LoginStyle>
				<form className="login-form" onSubmit={this.submitHandler}>
					<div className="title">Вход</div>
					<div className="label">Логин</div>	
					<div className="input-wrapper user-login">				
						<input onChange={this.changeHandler} 
						className='input' 
						autoComplete="off" 
						name="login"
						value={login} 
						type="text" 
						placeholder="Введите логин"
						ref={(input) => { this.loginInput = input }}
						/>
					</div>
					<div className="label">Пароль</div>
					<div className="input-wrapper user-password">					
						<input 
						onChange={this.changeHandler} 
						className='input' 
						autoComplete="off" 
						name="password" 
						type="text"
						value={passHidden ? hiddenPass : password}  
						placeholder="Введите пароль"
						ref={(input) => { this.passInput = input }}
						/>
						<span className="eye" 
						onClick={passHidden ? this.showPassword : this.hidePassword}>
						</span>	
					</div>
					<LoginButton className='login-button' onClick={this.sendForm}>
						Войти
					</LoginButton>
				</form>
			</LoginStyle>
		)
	}
}


export default Login