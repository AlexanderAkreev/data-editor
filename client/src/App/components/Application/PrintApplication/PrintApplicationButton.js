import React from 'react'
import {PrintButton} from 'components/Button/Button'
import PrintApplication from './printApplicationContainer'
import ReactToPrint from "react-to-print"

class PrintApplicationButton extends React.Component {

	render() {
		return(
			<React.Fragment>
				<div style={{display: 'none'}}>
					<PrintApplication ref={(node)=>this.printPage=node}/>
				</div>
				<ReactToPrint
		          trigger={() => 
		          	<PrintButton className='print-button'>
		          		Распечатать заявку
		          	</PrintButton>
		          }
		          content={() => this.printPage}
		          copyStyles={true}
		          closeAfterPrint={true}
		        />
	        </React.Fragment>
		)
	}

}

export default PrintApplicationButton