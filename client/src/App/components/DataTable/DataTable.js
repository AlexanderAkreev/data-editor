import React from 'react'
import DataTableStyle from './DataTableStyle'
import DataTableHeader from './DataTableHeader'
import DataTableBody from './DataTableBody'
import {pxToNum} from 'utils/commonUtils'


/*
	выводит данные по заказам, учитывая пагинацию 
	и количество элементов на странице

*/
class DataTable extends React.Component{

	constructor() {
	    super()
	}

	componentDidMount() {
		const {paginator, getData, data} = this.props
		const {pageIndex, itemsOnPage} = paginator
		const {order} = data
		/*
			если только что залогинились и еще не подгружали данные
		*/
		if(!order.length) {
			const firstIndex = paginator.pageIndex * paginator.itemsOnPage
			const lastIndex = firstIndex + paginator.itemsOnPage - 1	
			getData(firstIndex, lastIndex)
		}	
	}

	render() {
		const {controlBar, header} = this.props
		const bodyH = pxToNum(window.getComputedStyle(document.body).minHeight)
		const minHeight = bodyH - header.height - controlBar.height * 2
		return (
			<DataTableStyle minHeight={minHeight}>
				<table className="data-table">
					<DataTableHeader parentProps={this.props}/>
					<DataTableBody parentProps={this.props}/>				
				</table>
			</DataTableStyle>
		)
	}
}

export default DataTable



