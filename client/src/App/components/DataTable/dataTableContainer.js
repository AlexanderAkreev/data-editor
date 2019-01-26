import {connect} from 'react-redux'
import DataTable from './DataTable'
import dataService from 'services/dataService'
import dataActions from 'actions/dataActions'
import {processData} from './dataTableUtils'


const mapStateToProps = store => ({
	data: {
		...store.data,
		items: processData(store.data, store.ui.paginator)
	},
    paginator: store.ui.paginator,
    controlBar: store.ui.controlBar,
    header: store.ui.header
})



const mapDispatchToProps = dispatch => ({
    updateSort(sortField, sortType) {
    	dispatch(dataActions.updateSort(sortField, sortType))
    },
    removeSort(sortField) {
    	dispatch(dataActions.removeSort(sortField))
    },

    addSelected(itemId) {
    	dispatch(dataActions.addSelected(itemId))
    },

    removeSelected(itemId) {
    	dispatch(dataActions.removeSelected(itemId))
    },

    getData(firstIndex, lastIndex) {
    	dispatch(dataService.getData(firstIndex, lastIndex))
    },

})

const dataTableContainer = connect(mapStateToProps, mapDispatchToProps)(DataTable)

export default dataTableContainer