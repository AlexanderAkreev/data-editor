import C from 'constants/constants'
const update = (pageIndex, itemsOnPage) => ({
	type: C.UPDATE_PAGINATOR,
	payload: {
		pageIndex, 
		itemsOnPage
	}
})




const paginatorActions = {
	update
}

export default paginatorActions