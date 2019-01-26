import rootReducer from 'reducers/rootReducer'
import initialState from 'store/initialState'



const appReducer = (state={}, action) => {
	if (action.type === 'RESET_APP') {
		const newState = {...initialState}
		/*
			сохраняем нужные части state перед сбросом состояния приложения
		*/
		/*
			header height изменяется в Header методом componentDidMount
			Header монтируется (React вызывает его componentDidMount) 
			 один раз при загрузке приложения,
			и сброшенное height после logout не восстанавливается 
			(метод componentDidMount не вызывается повторно)
			при повторном login (если не перезагрузить страницу).
			Поэтому для корректного отображения страницы после повторного login,
			нужно сохранить это значение.
		*/
		newState.ui.header.height = state.ui.header.height
		state = newState
	}
	return rootReducer(state, action)
}


export default appReducer