import {connect} from 'react-redux'
import Selector from './Selector'
import dataActions from 'actions/dataActions'



const mapStateToProps = store => ({
    selected: store.data.selected,
    order: store.data.order,
    paginator: store.ui.paginator
})


const mapDispatchToProps = dispatch => ({

    addAllSelected(idList) {
    	dispatch(dataActions.addAllSelected(idList))
    },

    removeAllSelected(idList) {
    	dispatch(dataActions.removeAllSelected(idList))
    },


})

const selectorContainer = connect(mapStateToProps, mapDispatchToProps)(Selector)

export default selectorContainer