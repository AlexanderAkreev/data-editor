import {connect} from 'react-redux'
import authService from 'services/authService'
import Login from './Login'



const mapStateToProps = store => ({
    user: store.user,
})

const mapDispatchToProps = dispatch => ({
 
    loginHandler(login, password) {
    	dispatch(authService.login(login, password))
    }

})

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default loginContainer