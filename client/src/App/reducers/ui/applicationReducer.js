import C from 'constants/constants'
import {ui} from 'store/initialState'

const updateState = (state, action) => {
    const {appState} = action.payload
    return {
    	...state,
    	appState //edit, create, null
    }
}

const updateOperationType = (state, action) => {
    const {operationType} = action.payload
    return {
    	...state,
    	operationType 
    }
}

const reset = (state, action) => ui.application


const applicationReducer = (state = {}, action) => {
    switch (action.type) {
        case C.UPDATE_UI_APPLICATION_STATE:
            return updateState(state, action)
        case C.UPDATE_UI_APPLICATION_OPERATION_TYPE:
            return updateOperationType(state, action)
        case C.RESET_UI_APPLICATION:
            return reset(state, action)
        default:
            return state
    }
}

export default applicationReducer