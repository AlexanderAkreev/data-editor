import C from 'constants/constants'
import {application} from 'store/initialState'


const updateData = (state, action) => {
    return {...state, ...action.payload}
}

const reset = (state, action) => {
	/*
		сохраняем нужные поля перед сбросом
	*/
	const {saveFields} = action.payload
	/*
		создает новый объект, чтобы не изменить поля объекта 
		начального состояния
	*/
	const newState = {...application}
	for(let field of saveFields) {
		newState[field] = state[field]
	}
	return newState
}

const applicationReducer = (state = {}, action) => {
    switch (action.type) {
        case C.UPDATE_APPLICATION_DATA:
            return updateData(state, action) 
        case C.RESET_APPLICATION:
            return reset(state, action)
        default:
            return state
    }
}

export default applicationReducer