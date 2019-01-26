import React from 'react'
import Select from './Select/Select'
import Label from './Label/Label'
import Input from './Input/Input'
import WarnMessage from './WarnMessage'
import PrintButton from './PrintApplication/PrintApplicationButton'
import titles from './applicationTitles'

const ReturnsPart = ({update}) => {

	const returnGoods = [
		"Товар 1",
		"Товар 2",
		"Товар 3",
		"Товар 4",
		"Товар 5",
		"Товар 6",

	]

	const returnGoodsCount = [1, 2, 3, 4 ,5]
	
	const goodStates = [

		'Состояние 1',
		'Состояние 2',
		'Состояние 3',
		'Состояние 4',
		'Состояние 5',
		'Состояние 6',

	]

	const paymentMethods = [
		'Способ 1',
		'Способ 2',
		'Способ 3',
		'Способ 4',

	]

	const bankNames = [
		'Банк 1',
		'Банк 2',
		'Банк 3',
		'Банк 4',
		'Банк 5',

	]

	return (
		<React.Fragment>
			<div className='part returns'>
				<div className='title'>Информация о возврате</div>
				<div className="form">
					<div className='input-wrapper-wrapper'>
						<div className='input-wrapper return-goods'>
							<Label required>{titles['returnGoods']}</Label>
							<Select options={returnGoods} selectHandler={update('returnGoods')} required>
								Выберите товар который хотите вернуть	
							</Select>
						</div>
						<div className='input-wrapper return-goods-count'>
							<Label required>{titles['count']}</Label>
							<Select options={returnGoodsCount} selectHandler={update('returnGoodsCount')} required>
								0
							</Select>
						</div>
					</div>
					<div className='input-wrapper lot-number'>
						<Label>{titles['lotNumber']}</Label>
						<Input valueHandler={update('lotNumber')}>
							Введите номер партии товара
						</Input>
					</div>
					<div className='input-wrapper return-cause'>
						<Label required>{titles['returnCause']}</Label>
						<Input valueHandler={update('returnCause')}> 
							Выберите причину возврата
						</Input>
					</div>
					<div className='input-wrapper good-state'>
						<Label required>{titles['goodState']}</Label>
						<Select options={goodStates} selectHandler={update('goodState')} required> 
							Выберите состояние товара
						</Select>
					</div>
					<div className='input-wrapper check-number'>
						<Label required>{titles['checkNumber']}</Label>
						<Input valueHandler={update('checkNumber')} required> 
							Введите номер чека
						</Input>
					</div>
					<div className='input-wrapper purchase-date'>
						<Label required>{titles['purchaseDate']}</Label>
						<Input valueHandler={update('purchaseDate')} required> 
							Введите дату покупки
						</Input>
					</div>
					<div className='input-wrapper purchase-place'>
						<Label required>{titles['purchasePlace']}</Label>
						<Input valueHandler={update('purchasePlace')} required> 
							Введите место покупки
						</Input>
					</div>
					<div className='input-wrapper return-sum'>
						<Label required>{titles['returnSum']}</Label>
						<Input valueHandler={update('returnSum')} required> 
							Сумма к возврату
						</Input>
					</div>
					<div className='input-wrapper payment-method'>
						<Label required>{titles['paymentMethod']}</Label>
						<Select options={paymentMethods} selectHandler={update('paymentMethod')} required> 
							Выберите способ оплаты покупки
						</Select>
					</div>
				</div>
			</div>
			<div className='part customer-account-info last'>
				<div className='title'>Информация о счете покупателя</div>
				<div className='input-wrapper account-holder-name'>
					<Label>{titles['accountHolderName']}</Label>
					<Input valueHandler={update('accountHolderName')}>
						Введите ФИО Владельца счета
					</Input>
				</div>
				<div className='input-wrapper bank-name'>
					<Label>{titles['bankName']}</Label>
					<Select options={bankNames} selectHandler={update('bankName')}> 
						Выберите наименование банка
					</Select>
				</div>
				<div className='input-wrapper bic'>
					<Label>{titles['bic']}</Label>
					<Input valueHandler={update('bic')}>
						Введите БИК
					</Input>
				</div>
				<div className='input-wrapper correspondent-account'>
					<Label>{titles['correspondentAccount']}</Label>
					<Input valueHandler={update('correspondentAccount')}>
						Введите корреспондентский счет
					</Input>
				</div>
				<div className='input-wrapper transaction-account'>
					<Label>{titles['transactionAccount']}</Label>
					<Input valueHandler={update('transactionAccount')}>
						Введите расчетный счет
					</Input>
				</div>
				<WarnMessage/>
				<PrintButton/>
			</div>
		</React.Fragment>
	)

}


export default ReturnsPart