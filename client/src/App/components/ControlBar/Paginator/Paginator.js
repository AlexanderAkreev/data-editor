import React from 'react'
import PaginatorStyle from './PaginatorStyle'
import {isDataLoadNeeded} from './paginatorUtils'

const R = require('ramda')
const uniq = require('uniqid')


/*
	компонет отвечает за подгрузку данных при смене страницы,
	либо при смене количества элементов на странице. 
	Данные, подгруженные в течении сессии, повторно не загружаются
	до ее конца 

*/

class Paginator extends React.Component {

	state = {
		itemsOnPageOpen: false,
		pageNum: 1,
		focus: false
	}

	constructor() {
	    super()
	    this.handleClickOutside = this.handleClickOutside.bind(this)
	    this.toggleItemsOnPage = this.toggleItemsOnPage.bind(this)
	    this.changePageNum = this.changePageNum.bind(this)
	    this.handlePageNumBlur = this.handlePageNumBlur.bind(this)
	    this.handlePageNumFocus = this.handlePageNumFocus.bind(this)
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside)
	}


	handleClickOutside(e) {
		if (!this.itemsOnPageNode.contains(e.target)) {
			this.setState({
				itemsOnPageOpen: false
			})
		}
	}

	changePageNum(e) {
		const {total, paginator} = this.props		
		const pageTotal = Math.ceil(total / paginator.itemsOnPage)
		const {value} = e.target
		if(!value) { //имитация пустой строки
			this.setState({
				pageNum: value
			})
			return
		}
		const numVal = Number(value)
		if(!R.identical(numVal, NaN) && numVal > 0 && numVal <= pageTotal) {
			this.setState({
				pageNum: numVal
			})
		} 
	}
	
	handlePageNumBlur() {		
		const {
			total, paginator, updatePaginator, 
			getData, order
		} = this.props
		const {itemsOnPage, pageIndex} = paginator
		const {pageNum} = this.state
		this.setState({
			focus: false
		})
		if(!pageNum) { 
			this.setState({
				pageNum: pageIndex + 1
			})
			return
		}
		const newPageIndex = pageNum - 1		
		updatePaginator(newPageIndex, itemsOnPage)
		if(isDataLoadNeeded(order, newPageIndex, itemsOnPage, total)) {
			const firstIndex = order.length
			const lastIndex = pageNum * itemsOnPage - 1
			getData(firstIndex , lastIndex)
		}
		
	}

	handlePageNumFocus() {
		this.setState({
			focus: true,
			pageNum: this.props.paginator.pageIndex + 1
		})
	}

	toggleItemsOnPage() {		
		this.setState({
			itemsOnPageOpen: !this.state.itemsOnPageOpen
		})
	}

	render() {
		const {
			total, paginator, updatePaginator, 
			getData, className, order
		} = this.props
		const {itemsOnPageOpen} = this.state
		const {pageIndex, itemsOnPage, items} = paginator
		const pageTotal = Math.ceil(total / itemsOnPage)
		
		const options = R.difference(items, [itemsOnPage]).map(
			(option)=>{	
				const changeItemsOnPage=()=>{
					updatePaginator(0, option)
					if(isDataLoadNeeded(order, 0, option, total)) {
						const firstIndex = order.length
						const lastIndex = option - 1
						getData(firstIndex, lastIndex)
					}
				}
				return (
					<div 
						key={uniq()} 
						className="option" 
						onClick={changeItemsOnPage}
					>
						{option}
					</div>
				)
			}
		)

		const prevPage = () => {
			if(pageIndex == 0) {
				return
			} else {				
				updatePaginator(pageIndex - 1, itemsOnPage)				
			}
		}

		const nextPage = () => {
			const newPageIndex = pageIndex + 1
			if(newPageIndex == pageTotal) {
				return
			} else {
				updatePaginator(newPageIndex, itemsOnPage)
				if(isDataLoadNeeded(order, newPageIndex, itemsOnPage, total)) {
					const firstIndex = order.length
					const lastIndex = (newPageIndex + 1) * itemsOnPage - 1
					getData(firstIndex, lastIndex)
				}
			}
		}

		return (
			<PaginatorStyle>
				<div className={`paginator ${className}`}>
					<div className="items-on-page-wrapper">
						<span className='label'>Показывать по</span>
						<div 
							className={`items-on-page ${itemsOnPageOpen ? 'open' : ''}`} 
							onClick={this.toggleItemsOnPage}
							ref={(node)=>{this.itemsOnPageNode=node}}
						>
							<div className="active option">
								{itemsOnPage}
							</div>
							<div className="options">
								{options}
							</div>
						</div>
					</div>
					<div className="page-num-wrapper">
						<span className='label'>Страница</span>
						<div className="page-num">
							<div className="button prev-page" onClick={prevPage}>
							</div>
							<div className="input-wrapper">
								<input 
									onChange={this.changePageNum}
									onBlur={this.handlePageNumBlur} 
									onFocus={this.handlePageNumFocus} 
									className='input' 
									autoComplete="off" 
									name="page-num" 
									type="text"
									value={
										this.state.focus ? 
										this.state.pageNum : 
										pageIndex + 1
									}  
								/>
							</div>
							<div className="button next-page" onClick={nextPage}>
							</div>			
						</div>	
						<span className='page-total'>из {pageTotal}</span>		
					</div>
				</div>
			</PaginatorStyle>
		)


	}
	
}

export default Paginator



