

//вероятно, будет хранится в базе, а пока так
export const operationTypes = {
	returns: 'Возврат',
	exchange: 'Обмен'
}

export const personal =[
	'orderNumber',
	'operationType',
	'customerName',
	'docType',
	'passportNumSerial',
	'passportReceiveDate',
	'passportIssuedBy'
]

export const returns =[
	'returnGoods',
	'returnGoodsCount',
	'lotNumber',
	'returnCause',
	'goodState',
	'checkNumber',
	'purchaseDate',
	'purchasePlace',
	'returnSum',
	'paymentMethod',
	'accountHolderName',
	'bankName',
	'bic',
	'correspondentAccount',
	'transactionAccount',
]

export const exchange =[
	'exchangeGoods',
	'exchangeGoodsCount',
	'lotNumber',
	'exchangeCause',
	'goodState',
	'checkNumber',
	'purchaseDate',
	'purchasePlace',
	'forWhatExchange',
	'paymentMethod',
	'howExchange',
	'exchangeDate',
	'exchangeTime',
	'deliveryAddress',
	'exchangeAddress',
]