import {connect} from 'react-redux'
import Application from './Application'
import dataService from 'services/dataService'
import uiApplicationActions from 'actions/uiApplicationActions'
import applicationActions from 'actions/applicationActions'
import messageActions from 'actions/messageActions'
import {operationTypes, personal} from './applicationModel'


const R = require('ramda')


const mapStateToProps = store => ({
     header: store.ui.header,
     message: store.ui.message,
     uiApplication: store.ui.application,
     logoutClick: store.ui.logoutClick,
     
})


const mapDispatchToProps = dispatch => ({


    cancelApplication() {
    	dispatch(messageActions.on())
    }, 

    updateData(data) {
    	if(data['operationType']) {
    		dispatch(applicationActions.reset(personal))
    		const operationType = R.invertObj(operationTypes)[data['operationType']]
    		dispatch(uiApplicationActions.updateOperationType(operationType))
    	}
    	dispatch(applicationActions.updateData(data))
    },
    
})

const applicationContainer = connect(mapStateToProps, mapDispatchToProps)(Application)

export default applicationContainer