import C from 'constants/constants'

const addItems = (data) => ({
	type: C.ADD_DATA_ITEMS,
	payload: {
		data
	}
})

const updateTotal = (total) => ({
	type: C.UPDATE_DATA_TOTAL,
	payload: {
		total
	}
})


const updateOrder = (idList) => ({
	type: C.UPDATE_DATA_ITEMS_ORDER,
	payload: {
		idList
	}
})


const updateSort = (sortField, sortType) => ({
	type: C.UPDATE_DATA_SORT,
	payload: {
		sortField,
		sortType
	}
})


const removeSort = (sortField) => ({
	type: C.REMOVE_DATA_SORT,
	payload: {
		sortField
	}
})

const removeSelected = (itemId) => ({
	type: C.REMOVE_SELECTED_DATA,
	payload: {
		itemId
	}
})

const addSelected = (itemId) => ({
	type: C.ADD_SELECTED_DATA,
	payload: {
		itemId
	}
})

const addAllSelected = (idList) => ({
	type: C.ADD_ALL_SELECTED_DATA,
	payload: {
		idList
	}
})

const removeAllSelected = (idList) => ({
	type: C.REMOVE_ALL_SELECTED_DATA,
	payload: {
		idList
	}
})


const dataActions = {
	addItems,
	updateSort,
	removeSort,
	removeSelected,
	addSelected,
	addAllSelected,
	removeAllSelected,
	updateTotal,
	updateOrder
}




export default dataActions