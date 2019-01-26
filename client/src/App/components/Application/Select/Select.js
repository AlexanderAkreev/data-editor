import React from 'react'
import SelectStyle from './SelectStyle'

const uniq = require('uniqid')
const R = require('ramda')





class Select extends React.Component {

	state = {
		open: false,
		optionId: null,
		optsObj: null
	}

	constructor(props) {
		super(props)
		this.handleClickOutside = this.handleClickOutside.bind(this)
		this.toggleSelect = this.toggleSelect.bind(this)
		const {options} = props
		const optIds = options.map(() => uniq())
		const optsObj = R.zipObj(optIds, options) //{uniqueId: option, ...}
		this.state.optsObj = optsObj
	}
	
	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside)
	}


	handleClickOutside(e) {
		if (!this.select.contains(e.target)) {
			this.setState({
				open: false
			})
		}
	}

	toggleSelect() {
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		const {options, className, selectHandler, children, required, error} = this.props
		const {open, optionId, optsObj} = this.state
		const curOptIds =  R.difference(Object.keys(optsObj), [optionId])
		const optElements = curOptIds.map(
			(optId, i)=>{
				const click = () => {
					this.setState({
						optionId: optId
					})
					if(selectHandler) {
						selectHandler(optsObj[optId])
					}				
				}		
				return (
					<div 
						key={uniq()} 
						className="option" 
						onClick={click}
					>
						{optsObj[optId]}
					</div>
				)
			}
		)

		return (
			<SelectStyle
				className={`select ${className ? className : ''} ${open ? 'open' : ''}`}
				onClick={this.toggleSelect}
				ref={(node)=>{this.select=node}}
				error={error}
			>
				{
					R.type(optionId) == 'Null' && 
					<div className='default-value'>{children}</div>
				}
				{R.type(optionId) != 'Null' && optsObj[optionId]}
				<div className='options'>
					{optElements}
				</div>				
			</SelectStyle>
		)
	}
	

}


export default Select