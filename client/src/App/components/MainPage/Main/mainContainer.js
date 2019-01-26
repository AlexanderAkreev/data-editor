import {connect} from 'react-redux'
import Main from './Main'


const mapStateToProps = store => ({
    application: {
    	appState: store.ui.application.appState
    }
})


const mapDispatchToProps = dispatch => ({
    
})

const mainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default mainContainer