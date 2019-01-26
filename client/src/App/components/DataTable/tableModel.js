

/*
 набор полей в таблице заказов
*/
const dataFields = [
    'order_number',
    'purchased_from',
    'purchased_time',
    'bill_to_name',
    'deliver_name',
    'gt_base',
    'gt_purchased',
    'preorder',
    'status',
    'assignation',
    'action' //
]


const colTitles = [
    'order #',
    'Purchased from (Store)',
    'Purchased on',
    'Bill to Name',
    'Deliver Name',
    'G.T. (Base)',
    'G.T. (Purchased)',
    'Preorder',
    'Status',
    'Assignation',
    'Action',
]



/*
	объединение полей с названиями

*/
const tableModel = dataFields.map(
    (dataField, i) => ({
        dataField,
        title: colTitles[i]
    })
)




export default tableModel