import {connect} from 'react-redux'
import App from './App'



const mapStateToProps = store => ({
    user: store.user,
    loader: store.ui.loader,
    logoutClick: store.ui.logoutClick,
    message: store.ui.message,
    error: store.error
})

const appContainer = connect(mapStateToProps)(App)

export default appContainer