<?php 

require_once __DIR__ . '/../interfaces/Model.php';

class Application implements Model { 
	/*
		ключи масива соответствуют названиям полей в БД
	*/
	private $fields = [		
		    'id' => null, 
			'order_number' => null, 
			'operation_type' => null, 
			'customer_name' => null, 
			'doc_type' => null, 
			'passport_num_serial' => null, 
			'passport_receive_date' => null, 
			'passport_issued_by' => null, 
			'return_goods' => null,  
			'count' => null , 
			'lot_number' => null, 
			'return_cause' => null,  
			'good_state' => null, 
			'check_number' => null,
			'purchase_time' => null, 
			'purchase_place' => null,
			'return_sum' => null, 
			'payment_method' => null, 
			'account_holder_name' => null, 
			'bank_name' => null, 
			'bic' => null, 
			'correspondent_account' => null, 
			'transaction_account' => null, 
			'exchange_goods' => null, 
			'exchange_cause' => null, 
			'for_what_exchange' => null, 
			'how_exchange' => null, 
			'exchange_time' => null, 
			'delivery_address' => null, 
			'exchange_address' => null, 
			'create_time' => null, 
			'edit_time' => null, 
			'created_by' => null 
	];

	public function __toString() {
		return $this->toJSON();
	} 

	public function jsonSerialize() {
		return $this->getState();
	}

	public function toJSON() {
		return json_encode($this->fields);
	}

	public function get($fieldName) {
		if(!array_key_exists($fieldName, $this->fields)) {
			trigger_error("Property $fieldName doesn't exist.", E_USER_ERROR);
		}
		return $this->fields[$fieldName];
	}

	public function set($fieldName, $fieldValue) {
		if(!array_key_exists($fieldName, $this->fields)) {
			trigger_error("Property $fieldName doesn't exist.", E_USER_ERROR);
		}
		$this->fields[$fieldName] = $fieldValue;
	}

	public function getState() {
		return $this->fields;
	}

}


?>