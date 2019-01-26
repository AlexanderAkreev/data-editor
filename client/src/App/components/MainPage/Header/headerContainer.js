import {connect} from 'react-redux'
import authService from 'services/authService'
import headerActions from 'actions/headerActions'
import Header from './Header'
import uiApplicationActions from 'actions/uiApplicationActions'
import uiLogoutClickActions from 'actions/uiLogoutClickActions'
import messageActions from 'actions/messageActions'




const mapStateToProps = store => ({
    user: store.user,
    application: store.ui.application
})

const mapDispatchToProps = dispatch => ({
    logoutHandler() {
    	dispatch(uiLogoutClickActions.updateState())
    	dispatch(messageActions.on())   	
    	//dispatch(authService.logout()) 	
    },

    updateHeight(height) {
    	dispatch(headerActions.updateHeight(height))
    },

    createApplication() {
    	dispatch(uiApplicationActions.updateState('create'))
    },

    cancelApplication() {
    	dispatch(messageActions.on())
    }
})

const headerContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default headerContainer