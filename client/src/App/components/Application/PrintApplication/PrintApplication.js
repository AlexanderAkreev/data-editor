import React from 'react'
import PrintApplicationStyle from './PrintApplicationStyle'
import titles from '../applicationTitles'
import HeaderStyle from 'components/MainPage/Header/HeaderStyle'




const PrintPersonal = ({application}) => {
	return (		
		<div className='part personal'>
     		<div className='title'>Личные данные</div>
     		<div className='field'>
     			<div className='field-title'>{titles['orderNumber']}</div>
     			<div className='field-val'>{application['orderNumber']}</div>
     		</div>
     		<div className='field'>
     			<div className='field-title'>{titles['operationType']}</div>
     			<div className='field-val'>{application['operationType']}</div>
     		</div>
     		<div className='field'>
     			<div className='field-title'>{titles['customerName']}</div>
     			<div className='field-val'>{application['customerName']}</div>
     		</div>
     		<div className='field'>
     			<div className='field-title'>{titles['docType']}</div>
     			<div className='field-val'>{application['docType']}</div>
     		</div>
     		<div className='field'>
     			<div className='field-title'>{titles['passportNumSerial']}</div>
     			<div className='field-val'>{application['passportNumSerial']}</div>
     		</div>
     		<div className='field'>
     			<div className='field-title'>{titles['passportReceiveDate']}</div>
     			<div className='field-val'>{application['passportReceiveDate']}</div>
     		</div>
     		<div className='field'>
     			<div className='field-title'>{titles['passportIssuedBy']}</div>
     			<div className='field-val'>{application['passportIssuedBy']}</div>
     		</div>
		</div>		
	)			
}



const PrintReturns = ({application}) => {
	return (
		<React.Fragment>
			<div className='operation-type'>
				Заявка на возврат
			</div>
			<div className='print-data'>
			    <PrintPersonal application={application}/>
	     		<div className='part returns-info'>
	          		<div className='title'>Информация об обмене</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['returnGoods']}</div>
	          			<div className='field-val'>{application['returnGoods']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['count']}</div>
	          			<div className='field-val'>{application['returnGoodsCount']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['lotNumber']}</div>
	          			<div className='field-val'>{application['lotNumber']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['returnCause']}</div>
	          			<div className='field-val'>{application['returnCause']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['goodState']}</div>
	          			<div className='field-val'>{application['goodState']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['checkNumber']}</div>
	          			<div className='field-val'>{application['checkNumber']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['purchaseDate']}</div>
	          			<div className='field-val'>{application['purchaseDate']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['purchasePlace']}</div>
	          			<div className='field-val'>{application['purchasePlace']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['returnSum']}</div>
	          			<div className='field-val'>{application['returnSum']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['paymentMethod']}</div>
	          			<div className='field-val'>{application['paymentMethod']}</div>
	          		</div>
	     		</div>
 				<div className='part customer-account-info'>
 		     		<div className='title'>Информация о счете покупателя</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['accountHolderName']}</div>
 		     			<div className='field-val'>{application['accountHolderName']}</div>
 		     		</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['bankName']}</div>
 		     			<div className='field-val'>{application['bankName']}</div>
 		     		</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['bic']}</div>
 		     			<div className='field-val'>{application['bic']}</div>
 		     		</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['correspondentAccount']}</div>
 		     			<div className='field-val'>{application['correspondentAccount']}</div>
 		     		</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['transactionAccount']}</div>
 		     			<div className='field-val'>{application['transactionAccount']}</div>
 		     		</div>
 				</div>	
			</div>
		</React.Fragment>
	)			
}


const PrintExchange = ({application}) => {
	return (
		<React.Fragment>
			<div className='operation-type'>
				Заявка на обмен
			</div>
			<div className='print-data'>
			    <PrintPersonal application={application}/>
	     		<div className='part exchange-info'>
	          		<div className='title'>Информация об обмене</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['exchangeGoods']}</div>
	          			<div className='field-val'>{application['exchangeGoods']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['count']}</div>
	          			<div className='field-val'>{application['exchangeGoodsCount']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['lotNumber']}</div>
	          			<div className='field-val'>{application['lotNumber']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['exchangeCause']}</div>
	          			<div className='field-val'>{application['exchangeCause']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['goodState']}</div>
	          			<div className='field-val'>{application['goodState']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['checkNumber']}</div>
	          			<div className='field-val'>{application['checkNumber']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['purchaseDate']}</div>
	          			<div className='field-val'>{application['purchaseDate']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['purchasePlace']}</div>
	          			<div className='field-val'>{application['purchasePlace']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['forWhatExchange']}</div>
	          			<div className='field-val'>{application['forWhatExchange']}</div>
	          		</div>
	          		<div className='field'>
	          			<div className='field-title'>{titles['paymentMethod']}</div>
	          			<div className='field-val'>{application['paymentMethod']}</div>
	          		</div>
	     		</div>
 				<div className='part exchange-way-info'>
 		     		<div className='title'>Информация о способе обмена</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['howExchange']}</div>
 		     			<div className='field-val'>{application['howExchange']}</div>
 		     		</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['exchangeDate']}</div>
 		     			<div className='field-val'>{application['exchangeDate']}</div>
 		     		</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['exchangeTime']}</div>
 		     			<div className='field-val'>{application['exchangeTime']}</div>
 		     		</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['deliveryAddress']}</div>
 		     			<div className='field-val'>{application['deliveryAddress']}</div>
 		     		</div>
 		     		<div className='field'>
 		     			<div className='field-title'>{titles['exchangeAddress']}</div>
 		     			<div className='field-val'>{application['exchangeAddress']}</div>
 		     		</div>
 				</div>	
			</div>
		</React.Fragment>
	)			
}




class PrintApplication extends React.Component{
	render() {
		const {application, uiApplication} = this.props
		return (
			<PrintApplicationStyle>
				<HeaderStyle>	
					<div className='header'>
					</div>
				</HeaderStyle>				
				{
					uiApplication.operationType === 'returns' &&
					<PrintReturns application={application}/>
				}

				{
					uiApplication.operationType === 'exchange' &&
					<PrintExchange application={application}/>
				}
				<div className='footer'>
					<div className='left footer-part'>
						<div className='text'>Оператор</div>
						<div className='line'>
							<div className='sub'>подпись</div>
						</div>
						<div className='line'>
							<div className='sub'>расшифровка подписи</div>
						</div>					
					</div>
					<div className='right footer-part'>
						<div className='text'>Дата</div>
						<div className='line'></div>
					</div>
				</div>									
			</PrintApplicationStyle>
		)

	}
}

export default PrintApplication