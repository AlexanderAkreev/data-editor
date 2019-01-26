import React from 'react'
import tableModel from 'components/DataTable/tableModel'

const uniq = require('uniqid')

const Cell = ({cellData}) => 
	<td className="cell">
			{cellData}
	</td>
			

const Row = ({parentProps, item, selected}) => {
	const {addSelected, removeSelected} = parentProps 
	

	const cells = tableModel.map(
		(col, i) => {
			const cellData = item[col.dataField]
			return <Cell key={uniq()} cellData={cellData}/>
		}
	)

	const selectItem = () => {
		addSelected(item.id)
	}

	const deselectItem = () => {
		removeSelected(item.id)
	}

	return (
		<tr className="row">
			<td className="cell select" 
				onClick={selected ? deselectItem : selectItem}
			>
				<div className={`checkbox ${selected ? 'active' : ''}`}>
				</div>
			</td>
			{cells}
		</tr>
	)
}


const DataTableBody = ({parentProps}) => {
	const {data} = parentProps
	const {items, selected} = data
	const rows = items.map(
		(item, i) => {
			let select = false
			if(selected.indexOf(item.id) != -1) {
				select = true
			}
			return (
				<Row 
					key={uniq()} 
					item={item} 
					parentProps={parentProps} 
					selected={select}
				/>
			)
		}
		
	)
	return (
		<tbody className="body">
			{rows}
		</tbody>
	)
}

export default DataTableBody



