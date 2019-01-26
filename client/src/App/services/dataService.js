import axios from 'axios'
import requestActions from 'actions/requestActions'
import dataActions from 'actions/dataActions'
import C from 'constants/constants'
import errorActions from 'actions/errorActions'
import messageActions from 'actions/messageActions'

//НУЖНО УЧЕСТЬ ТО, ЧТО С ОДНИМ ДОКУМЕНТОМ ЕДИНОВРЕМЕННО МОЖЕТ РАБОТАТЬ ТОЛЬКО ОДИН ПОЛЬЗОВАТЕЛЬ

let url = WEB_API

export const getData = (firstIndex, lastIndex) => {
    return async (dispatch, getState) => {
        dispatch(requestActions.fetching(C.GET_DATA))
        const conf = {
            method: 'POST',
            url,
            headers: {
                'content-type': 'application/json'
            },
            data: {
                token: getState().user.token,
                actionType: 'GET_DATA',
                firstIndex,
                lastIndex
            }
        }
        let response = null
        try {           
            try {
                response = await axios(conf)
            } catch (error) {
                dispatch(requestActions.error(C.GET_DATA))
                throw error
            }
            if (response.status != 200) {
                dispatch(requestActions.error(C.GET_DATA))
                throw new Error(`STATUS: ${response.status}`)
            }
            dispatch(requestActions.success(C.GET_DATA))
            const contentType = response.headers['content-type']
            if (!contentType || !contentType.includes("application/json")) {
                throw new TypeError("NOT JSON");
            }
            const {data} = response
            //тут нужно преобразовать типы полей в верные 
            /*for(let item of Object.values(data.items)) {
            	item['order_number'] = Number(item['order_number'])
            }*/
            dispatch(dataActions.addItems(data.items))
            dispatch(dataActions.updateTotal(data.total))
            dispatch(dataActions.updateOrder(data.order))
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



const dataService = {
    getData,
}




export default dataService