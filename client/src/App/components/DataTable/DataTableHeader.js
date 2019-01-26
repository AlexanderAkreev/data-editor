import React from 'react'
import tableModel from 'components/DataTable/tableModel'
import {SortIcon} from 'components/Icon/Icon'
import C from 'constants/constants'

const R = require('ramda')
const uniq = require('uniqid')



const Sort = ({sortType}) => 
	<div className="sort">
		{sortType === C.ASC_SORT &&
			<SortIcon className='asc sort-icon'/>
		}
		{sortType === C.DESC_SORT &&
			<SortIcon className='desc sort-icon'/>
		}
	</div>


const Cell = ({parentProps, col}) => {
	const {removeSort, updateSort, data} = parentProps
	const {sort} = data
	const sortField = R.find(R.propEq('sortField', col.dataField))(sort)
	const ascSort = () => {
		updateSort(col.dataField, C.ASC_SORT)
	}
	const descSort = () => {
		updateSort(col.dataField, C.DESC_SORT)
	}
	const changeSort = () => {
		if(!sortField) {
			ascSort()
			return
		}
		switch(sortField.sortType){
			case C.ASC_SORT:
				descSort()
				break
			case C.DESC_SORT:
				removeSort(col.dataField)
				break
		}			
	}
	return (
		<td className="cell" onClick={changeSort}>
			<div className='cell-data-wrapper'>
				<div className="title">
					{col.title}
				</div>
				{sortField && <Sort sortType={sortField.sortType}/>}			
			</div>
		</td>
	)
}

const DataTableHeader = ({parentProps}) => {
	const cells = tableModel.map(
		(col) => <Cell key={uniq()} parentProps={parentProps} col={col}/>
	)
	return (		
		<thead className="header">
			<tr>
				<td className="cell select"></td>
				{cells}
			</tr>			
		</thead>
	)
}

export default DataTableHeader



