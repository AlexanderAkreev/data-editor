import C from 'constants/constants'
import loaderActions from 'actions/loaderActions'


/*
	открывает components/Loader при запросах к сереверу через services,
	и при подгрузке components/MainPage/LoadablePart
*/
const loader = store => next => action => {   
    next(action)  
    const {fetching, errors} = store.getState().request
    const {loader} = store.getState().ui
    if(fetching.length || errors.length) {
        !loader ? next(loaderActions.on()) : 0
    } else {
        loader ? next(loaderActions.off()) : 0
    }
}


export default loader