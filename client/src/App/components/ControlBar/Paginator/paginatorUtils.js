export const isDataLoadNeeded = (curItems, pageIndex, itemsOnPage, totalInDB) => {
	const nextTotal = itemsOnPage * (pageIndex + 1)
	return curItems.length < nextTotal && curItems.length != totalInDB
}