<?php 

interface Model extends JsonSerializable {

	/*
		возвращает JSON [$поле => $значение, ...] экземпляра
	*/
	public function toJSON();

	/*
		возвращает значение $fieldName экземпляра.
		если $fieldName нет, то вызывается trigger_error
	*/
	public function get($fieldName);

	/*
		записывает $fieldValue в $fieldName экземпляра.
		если $fieldName нет, то вызывается trigger_error
	*/
	public function set($fieldName, $fieldValue);

	/*
		возвращет [$поле => $значение, ...]
	*/
	public function getState();

	/*
		возвращает результат работы toJSON 
	*/
	public function __toString();

	/*
		возвращает результат работы getState
	*/
	public function jsonSerialize();
}

?>