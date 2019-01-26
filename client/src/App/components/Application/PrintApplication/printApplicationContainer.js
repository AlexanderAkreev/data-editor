import {connect} from 'react-redux'
import PrintApplication from './PrintApplication'



const mapStateToProps = store => ({
     application: store.application,
     uiApplication: store.ui.application,
})


const printApplicationContainer = connect(mapStateToProps)(PrintApplication)

export default printApplicationContainer