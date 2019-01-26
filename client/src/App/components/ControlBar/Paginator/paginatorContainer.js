import {connect} from 'react-redux'
import Paginator from './Paginator'
import dataService from 'services/dataService'
import paginatorActions from 'actions/paginatorActions'




const mapStateToProps = store => ({
    total: store.data.total,
    order: store.data.order,
    paginator: store.ui.paginator
})


const mapDispatchToProps = dispatch => ({

    updatePaginator(pageIndex, itemsOnPage) {
    	dispatch(paginatorActions.update(pageIndex, itemsOnPage))   	
    	
    },

    getData(firstIndex, lastIndex) {
    	dispatch(dataService.getData(firstIndex, lastIndex))
    }
    
})

const paginatorContainer = connect(mapStateToProps, mapDispatchToProps)(Paginator)

export default paginatorContainer