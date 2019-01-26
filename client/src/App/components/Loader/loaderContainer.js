import {connect} from 'react-redux'
import Loader from './Loader'




const mapStateToProps = store => ({
    request: store.request
})

const loaderContainer = connect(mapStateToProps)(Loader)

export default loaderContainer