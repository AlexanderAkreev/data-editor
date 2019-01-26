import axios from 'axios'
import authActions from 'actions/authActions'
import requestActions from 'actions/requestActions'
import userActions from 'actions/userActions'
import appActions from 'actions/appActions'
import errorActions from 'actions/errorActions'
import messageActions from 'actions/messageActions'
import C from 'constants/constants'

const url = WEB_API

export const login = (login, password) => {
    return async (dispatch, getState) => {
        dispatch(requestActions.fetching(C.LOGIN_REQUEST))
        const conf = {
            method: 'POST',
            url,
            headers: {
                'content-type': 'application/json'
            },
            data: {
                login,
                password,
                actionType: C.LOGIN_REQUEST
            }
        }
        let response = null
        try {           
            try {
                response = await axios(conf)
            } catch (error) {
                dispatch(requestActions.error(C.LOGIN_REQUEST))
                throw error
            }
            if (response.status != 200) {
                dispatch(requestActions.error(C.LOGIN_REQUEST))
                throw new Error(`STATUS: ${response.status}`)
            }
            dispatch(requestActions.success(C.LOGIN_REQUEST))
            const contentType = response.headers['content-type']
            if (!contentType || !contentType.includes("application/json")) {
                throw new TypeError("NOT JSON");
            }
            const {
                data
            } = response
             // JSON.parse(data)
            if (data.loginSuccess) {
                dispatch(userActions.authorized(data.userId, data.token))
            } else {
                dispatch(authActions.loginFailure())
            }
        } catch (error) {
            if(response) {
            	dispatch(errorActions.updateError(response.data))
            } else {
            	dispatch(errorActions.updateError(error.message))
            }
            dispatch(messageActions.on())
        }

    }
}

export const logout = (login, password) => {
    return async (dispatch, getState) => {
        dispatch(requestActions.fetching(C.LOGOUT_REQUEST))
        const conf = {
            method: 'POST',
            url,
            headers: {
                'content-type': 'application/json'
            },
            data: {
                userId: getState().user.userId,
                token: getState().user.token,
                actionType: C.LOGOUT_REQUEST
            }
        }
        let response = null
        try {
            try {
                response = await axios(conf)
            } catch (error) {
                dispatch(requestActions.error(C.LOGOUT_REQUEST))
                throw error
            }
            if (response.status != 200) {
                dispatch(requestActions.error(C.LOGOUT_REQUEST))
                throw new Error(`STATUS: ${response.status}`)
            }
            dispatch(requestActions.success(C.LOGOUT_REQUEST))
            const contentType = response.headers['content-type']
            if (!contentType || !contentType.includes("application/json")) {
                throw new TypeError("NOT JSON");
            }
            const {
                data
            } = response
            if (data.logoutSuccess) {
                dispatch(appActions.reset())
            }
        } catch (error) {
            if(response) {
            	dispatch(errorActions.updateError(response.data))
            } else {
            	dispatch(errorActions.updateError(error.message))
            }
            dispatch(messageActions.on())
        }

    }
}





const authService = {
    login,
    logout
}



export default authService