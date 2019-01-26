import {connect} from 'react-redux'
import Message from './Message'
import uiApplicationActions from 'actions/uiApplicationActions'
import applicationActions from 'actions/applicationActions'
import authService from 'services/authService'
import messageActions from 'actions/messageActions'
import uiLogoutClickActions from 'actions/uiLogoutClickActions'



const mapStateToProps = store => ({
	application: store.ui.application,
	logoutClick: store.ui.logoutClick,
	error: store.error
})

const mapDispatchToProps = dispatch => ({


    cancelApplication() {
    	dispatch(uiApplicationActions.updateState(null))
    	dispatch(uiApplicationActions.reset())
    	dispatch(applicationActions.reset())
    	dispatch(messageActions.off())
    },

   	closeApplicationMessage() {
    	dispatch(messageActions.off())
    },

    closeLogoutMessage() {
   		dispatch(uiLogoutClickActions.updateState())
    	dispatch(messageActions.off())
    }, 

    logoutHandler() {
    	dispatch(authService.logout()) 
    }
    
})



const messageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)

export default messageContainer