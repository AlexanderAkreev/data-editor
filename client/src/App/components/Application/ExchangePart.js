import React from 'react'
import Select from './Select/Select'
import Label from './Label/Label'
import Input from './Input/Input'
import PrintButton from './PrintApplication/PrintApplicationButton'
import titles from './applicationTitles'

const ExchangePart = ({update}) => {

	const exchangeGoods = [
		"Товар 1",
		"Товар 2",
		"Товар 3",
		"Товар 4",
		"Товар 5",
		"Товар 6",

	]

	const exchangeGoodsCount = [1, 2, 3, 4 ,5]
	
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

	const exchangeAddresses = [
		'Адрес 1',
		'Адрес 2',
		'Адрес 3',
		'Адрес 4',
		'Адрес 5',
	]

	const exchangeTime = [
		'Время 1',
		'Время 2',
		'Время 3',

	]

	return (
		<React.Fragment>
			<div className='part exchange'>
				<div className='title'>Информация о обмене</div>
				<div className="form">
					<div className='input-wrapper-wrapper'>
						<div className='input-wrapper exchange-goods'>
							<Label required>{titles['exchangeGoods']}</Label>
							<Select options={exchangeGoods} selectHandler={update('exchangeGoods')} required>
								Выберите товар который хотите обменять	
							</Select>
						</div>
						<div className='input-wrapper  exchange-goods-count'>
							<Label required>{titles['count']}</Label>
							<Select options={exchangeGoodsCount} selectHandler={update('exchangeGoodsCount')} required>
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
					<div className='input-wrapper exchange-сause'>
						<Label required>{titles['exchangeCause']}</Label>
						<Input valueHandler={update('exchangeCause')}> 
							Выберите причину обмена
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
					<div className='input-wrapper for-what-exchange'>
						<Label required>{titles['forWhatExchange']}</Label>
						<Input valueHandler={update('forWhatExchange')} required> 
							На что обмен
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
			<div className='part exchange-way-info last'>
				<div className='title'>Информация о способе обмена товара</div>
				<div className='input-wrapper how-exchange'>
					<Label required>{titles['howExchange']}</Label>
					<Select options={paymentMethods} selectHandler={update('howExchange')} required> 
						Выберите способ обмена
					</Select>
				</div>
				<div className='input-wrapper-wrapper'>
					<div className='input-wrapper exchange-date'>
						<Label required>{titles['exchangeDate']}</Label>
						<Input valueHandler={update('exchangeDate')} required>
							Дата
						</Input>
					</div>
					<div className='input-wrapper exchange-time'>
						<Label required>{titles['exchangeTime']}</Label>
						<Select options={exchangeTime} selectHandler={update('exchangeTime')} required>
							Время
						</Select>
					</div>
				</div>
				<div className='input-wrapper delivery-address'>
					<Label required>{titles['deliveryAddress']}</Label>
					<Input valueHandler={update('deliveryAddress')} required>
						Введите адрес доставки
					</Input>
				</div>
				<div className='input-wrapper exchange-address'>
					<Label required>{titles['exchangeAddress']}</Label>
					<Select options={exchangeAddresses} selectHandler={update('exchangeAddress')} required> 
						Выберите адрес обмена
					</Select>
				</div>
				<PrintButton/>		
			</div>
		</React.Fragment>
	)

}


export default ExchangePart
