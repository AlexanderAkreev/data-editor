import React from 'react'
import Selector from './Selector/selectorContainer'
import Paginator from './Paginator/paginatorContainer'
import Search from './Search/Search'
import ControlBarStyle from './ControlBarStyle'
import {pxToNum} from 'utils/commonUtils'


/*
	компонет контролирует поиск, пагинацию и выделения элементов таблицы

*/

class ControlBar extends React.Component{

	constructor() {
		super()
		this.updateHeight = this.updateHeight.bind(this)
	}

	componentDidMount() {
		this.updateHeight()
	}

	updateHeight() {
		if(this.controlBar) {
			const {updateHeight} = this.props
			const style = window.getComputedStyle(this.controlBar)
			updateHeight(pxToNum(style.height))
		}		
	}

	render() {
		const {className} = this.props

		return (
			<ControlBarStyle ref={(node)=>{this.controlBar = node}}>
				<div className={`control-bar ${className}`}>
					<div className="left">
						<Selector/>					
					</div>
					<div className="right">
						<Search/>
						<Paginator className={className}/>
					</div>
				</div>
			</ControlBarStyle>
		)


	}
	

}

export default ControlBar



