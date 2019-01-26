import {connect} from 'react-redux'
import MainPage from './MainPage'
import requestActions from 'actions/requestActions'
import C from 'constants/constants'




const mapStateToProps = store => ({
    
})


const mapDispatchToProps = dispatch => ({
    componentsFetching() {
    	dispatch(requestActions.fetching(C.COMPONENTS_LOADING))
    },

    componentsFetchingSuccess() {
    	dispatch(requestActions.success(C.COMPONENTS_LOADING))
    },

    componentsFetchingError() {
    	dispatch(requestActions.error(C.COMPONENTS_LOADING))
    }
})

const mainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default mainPageContainer