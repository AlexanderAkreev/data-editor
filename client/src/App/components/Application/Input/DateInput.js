import React from 'react'
import ReactDOM from 'react-dom'
import {DateInputStyle} from './InputStyle'
import Calendar from 'react-calendar'
import {DateIcon} from 'components/Icon/Icon'
import moment from 'moment'

class DateInput extends React.Component {

	state = {
		value: '',
		showInput: false,
		showCalendar: false,
	}

	clickIn = false
	clickOut = false

	constructor(props) {
		super(props)
		this.handleClickOutside = this.handleClickOutside.bind(this)
		this.clickHandler = this.clickHandler.bind(this)
		this.onChange = this.onChange.bind(this)
		this.toggleCalendar = this.toggleCalendar.bind(this)
		this.getDateVal = this.getDateVal.bind(this)
		this.onBlur = this.onBlur.bind(this)
	}
	

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside)
	}


	/*
		если клик был вне DateInputStyle, метод закроет календарь (showCalendar: false),
		отобразит поле ввода, если есть введенное значение
	*/
	handleClickOutside(e) {
		this.clickOut = true
		if(!this.clickIn) {
			this.setState({
				showInput: Boolean(this.state.value.length),
				showCalendar: false
			})
			this.clickOut = false
		}			
	}

	/*
		метод выполнится только при нажатии на DateInputStyle 
	*/
	clickHandler(e) {
		this.clickIn = true
		const inter = setInterval(()=>{
			/*
				эта часть выполнится только после выполнения handleClickOutside
				(т.е. после того как событие clickHandler всплывет до document) 
			*/
			if(this.clickOut) { 
				if(!this.state.showInput) {
					this.setState({
						showInput: true
					})		
				}
				if(this.input) {
					this.input.focus()
				}
				this.clickIn = false
				this.clickOut = false
				clearInterval(inter)
			}		
		}, 20)
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	toggleCalendar() {
		this.setState({
			showCalendar: !this.state.showCalendar
		})
	}

	getDateVal(value) {
		const date = moment(value, true).format('DD.MM.YYYY')
		this.setState({
			value: date
		})
	}

	onBlur() {
		this.props.valueHandler(this.state.value)
	}

	render() {
		const {className, children, error} = this.props
		const {clickHandler, state, onBlur,
				onChange, toggleCalendar, getDateVal} = this
		const {showInput, value, showCalendar} = state
		return (
			<DateInputStyle
				className={`${className ? className : ''}`}
				onClick={clickHandler}
				error={error}
			>
				{
					!showInput &&
					<div 
						className='default-value'
						onClick={clickHandler}
					>
						{children}
					</div>
				}
				{
					showInput && 
					<input 
						onChange={onChange}
						className='input' 
						autoComplete="off" 
						name="input" 
						type="text"
						value={value}
						onBlur={onBlur}
						ref={(node)=>{this.input=node}}
					/>	
				}
				<DateIcon className='date-icon' onClick={toggleCalendar}/>
				{showCalendar && 
					<Calendar 
						className='calendar' 
						onChange={getDateVal}
						locale='ru-RU'
					/>
				}
			</DateInputStyle>
		)
	}
	

}


export default DateInput