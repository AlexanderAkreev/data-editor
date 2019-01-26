import React from 'react'
import SelectorStyle from './SelectorStyle'
import {SimpleButton} from 'components/Button/Button'
import {getPaginatedData} from 'components/DataTable/dataTableUtils'


const Selector = (props) => {
	const {
		selected, 
		order, 
		paginator, 
		addAllSelected, 
		removeAllSelected
	} = props

	const selectAll = () => {
		addAllSelected(getPaginatedData(order, paginator))
	}

	const removeAllSelect = () => {
		removeAllSelected(getPaginatedData(order, paginator))
	}

	return (
		<SelectorStyle>
			<div className="selector">
				<div className="control">
					<SimpleButton onClick={selectAll} className="button select-all">
						Выбрать все
					</SimpleButton>
					<div className="divider">	
					</div>
					<SimpleButton onClick={removeAllSelect} className="button deselect">
						Снять выделения				
					</SimpleButton>
				</div>
				<div className="selected-count">
					Выбрано: {selected.length}			
				</div>
			</div>
		</SelectorStyle>
	)
}

export default Selector



