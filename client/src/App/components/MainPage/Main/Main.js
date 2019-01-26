import React from 'react'
import MainStyle from './MainStyle'
import DataTable from 'components/DataTable/dataTableContainer'
import ControlBar from 'components/ControlBar/controlBarContainer'
import Application from 'components/Application/applicationContainer'


const Main = (props) => {
	const {application} = props
	return (
		<MainStyle>
			<div className='main'>
				{!application.appState && 
					<React.Fragment>
						<ControlBar className='top'/>
						<DataTable/>
						<ControlBar className='bottom'/>
					</React.Fragment>
				}

				{application.appState === 'create' && 

					<Application/>

				}
				
			</div>
		</MainStyle>

	)
}

export default Main