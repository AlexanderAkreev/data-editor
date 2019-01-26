import React from 'react'
import Select from './Select/Select'
import Label from './Label/Label'
import Input from './Input/Input'
import DateInput from './Input/DateInput'
import titles from './applicationTitles'
import {operationTypes} from './applicationModel'

const R = require('ramda')

const PersonalPart = ({update, updateOperationType}) => {



	
	const orderNumbers = [
		"1243",
		"345354",
		"567457",
		"34535654",
		"2323",
	]

	const docTypes = [
		"Паспорт РФ",
		"Загранпаспорт",
		"Паспорт моряка",
		"Военный билет",
		"Другое",
	]


	return (
		<div className='part personal first'>
			<div className='title'>Личные данные</div>
			<div className="form">
				<div className='input-wrapper order-number'>
					<Label>{titles['orderNumber']}</Label>
					<Select options={orderNumbers} selectHandler={update('orderNumber')}>
						Введите номер заказа	
					</Select>
				</div>
				<div className='input-wrapper operation-type'>
					<Label required>{titles['operationType']}</Label>
					<Select options={Object.values(operationTypes)} selectHandler={update('operationType')} required> 
						Тип операции
					</Select>
				</div>
				<div className='input-wrapper customer-name'>
					<Label required>{titles['customerName']}</Label>
					<Input valueHandler={update('customerName')} required> 
						Введите ФИО покупателя
					</Input>
				</div>
				<div className='input-wrapper doc-type'>
					<Label required>{titles['docType']}</Label>
					<Select options={docTypes} selectHandler={update('docType')} required> 
						Выберите тип документа
					</Select>
				</div>
				<div className='input-wrapper-wrapper'>
					<div className='input-wrapper passport-num-serial'>
						<Label required>{titles['passportNumSerial']}</Label>
						<Input valueHandler={update('passportNumSerial')} required> 
							Номер и серия
						</Input>
					</div>
					<div className='input-wrapper passport-receive-date'>
						<Label required>{titles['passportReceiveDate']}</Label>
						<DateInput valueHandler={update('passportReceiveDate')} required> 
							Дата выдачи
						</DateInput>
					</div>
				</div>
				<div className='input-wrapper passport-issued-by'>
					<Label>{titles['passportIssuedBy']}</Label>
					<Input valueHandler={update('passportIssuedBy')}> 
						Кем выдан документ
					</Input>
				</div>
			</div>
		</div>
	)

}


export default PersonalPart