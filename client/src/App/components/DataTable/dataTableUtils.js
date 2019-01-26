import C from 'constants/constants'
const R = require('ramda')

//нужен reselect
export const dataSort = (list, sortFields)=>{
	const sorts = sortFields.map((sort)=>{
		if(sort.sortType === C.ASC_SORT) {
			return R.ascend(R.prop(sort.sortField))
		}
		if(sort.sortType === C.DESC_SORT) {
			return R.descend(R.prop(sort.sortField))
		}
	})
	return R.sortWith(sorts)(list)

}

export const getOrderedData = (itemsObj, orderedIdList)=>{
	return orderedIdList.map((id)=>{
		return itemsObj[id]
	})
}

export const getPaginatedData = (orderedIdList, paginator) => {
	const {pageIndex, itemsOnPage} = paginator
	const firstIndex = pageIndex * itemsOnPage
	const lastNum = firstIndex + itemsOnPage
	return orderedIdList.slice(firstIndex, lastNum)
}

export const processData = (data, paginator) => {
	const {items, order, sort}  = data
	const paginated = getPaginatedData(order, paginator)
	const ordered = getOrderedData(items, paginated)
	const sorted = dataSort(ordered, sort)
	return sorted
}

const dataTableUtils = {
	dataSort,
	getOrderedData,
	getPaginatedData,
	processData
}

export default dataTableUtils