import {connect} from 'react-redux'
import controlBarActions from 'actions/controlBarActions'
import ControlBar from './ControlBar'





const mapStateToProps = store => ({
   
})


const mapDispatchToProps = dispatch => ({

    updatePaginator(pageIndex, itemsOnPage) {
    	dispatch(paginatorActions.update(pageIndex, itemsOnPage))   	
    	
    },

    getData(firstIndex, lastIndex) {
    	dispatch(dataService.getData(firstIndex, lastIndex))
    },

    updateHeight(height) {
    	dispatch(controlBarActions.updateHeight(height))
    }
    
})

const controlBarContainer = connect(mapStateToProps, mapDispatchToProps)(ControlBar)

export default controlBarContainer