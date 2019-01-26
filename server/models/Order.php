<?php 

require_once __DIR__ . '/../interfaces/Model.php';

class Order implements Model { 
	/*
		ключи масива соответствуют названиям полей в БД
	*/
	private $fields = [		
		'id' => null,
		'order_number' => null,
		'purchased_from' => null, 
		'purchased_time' => null, 
		'bill_to_name' => null, 
		'deliver_name' => null, 
		'gt_base' => null,
		'gt_purchased' => null, 
		'preorder' => null, 
		'status' => null,
		'assignation' => null,
		'create_time' => null,
		'edit_time' => null,
		'created_by' => null,
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