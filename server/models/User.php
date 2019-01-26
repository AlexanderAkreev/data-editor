<?php 

require_once __DIR__ . '/../interfaces/Model.php';

class User implements Model { 
	/*
		ключи масива соответствуют названиям полей в БД
	*/
	private $fields = [		
		'id' => null,  # UUID v4
		'name' => null,
		'email' => null, 
		'phone' => null, 
		'login' => null, 
		'password' => null, #хэш пароля
		'login_time' => null, # UNIX UTC
		'create_time' => null, # UNIX UTC
		'token' => null,
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