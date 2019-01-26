import React from 'react'
import {InputStyle} from './InputStyle'


class Input extends React.Component {

	state = {
		value: '',
		showInput: false,
		handleClickOutside: false
	}

	constructor(props) {
		super(props)
		this.handleClickOutside = this.handleClickOutside.bind(this)
		this.clickHandler = this.clickHandler.bind(this)
		this.onBlur = this.onBlur.bind(this)
		this.onChange = this.onChange.bind(this)
	}
	

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside)
	}


	handleClickOutside(e) {
		if(this.state.handleClickOutside) {
			if (!this.fakeInput.contains(e.target) &&
				!this.input.contains(e.target)) {
				this.setState({
					showInput: false,
					handleClickOutside: false
				})
			}
		}				
	}

	clickHandler(e) {
		if(this.state.showInput) {
			this.input.focus()
		} else {
			this.setState({
				showInput: true
			})
		}
	}

	onChange(e) {
		const {value} = e.target
		this.setState({
			value: value
		})
	}

	onBlur(e) {
		const {valueHandler} = this.props
		if(valueHandler) {
			valueHandler(this.state.value)
		}
		this.setState({
			handleClickOutside: true
		})
	}

	render() {
		const {className, children, error} = this.props
		const {clickHandler, state, onChange, onBlur} = this
		const {showInput, value} = state
		return (
			<InputStyle
				ref={(node)=>{this.fakeInput=node}}
				className={`${className ? className : ''}`}
				onClick={clickHandler}
				error={error}
			>
				{
					!showInput && !value &&
					<div 
						className='default-value'
						onClick={clickHandler}
					>
						{children}
					</div>
				}
				{
					(showInput || value) && 
					<input 
						onChange={this.onChange}
						onBlur={this.onBlur} 
						className='input' 
						autoComplete="off" 
						name="input" 
						type="text"
						value={value}
						autoFocus={true}
						ref={(node)=>{this.input=node}}
					/>	
				}
				
			</InputStyle>
		)
	}
	

}


export default Input