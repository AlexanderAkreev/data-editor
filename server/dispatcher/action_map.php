<?php 

require_once __DIR__ . '/../constants/Constants.php';
use Constants as C;

/*
	чтобы ActionDispatcher автоматически вызывал нужные методы нужного сервиса для обработки запроса, нужно: 
	1 - связать название действия и название сервиса в $ACTION_MAP.
	2 - связать название действия и название метода сервиса в $ACTION_MAP сервиса. 
	3 - все названия действий в системе должны быть уникальными, но говорящими
*/

$ACTION_MAP = array();
$ACTION_MAP[C::LOGOUT_REQUEST] = C::AUTH_SERVICE;
$ACTION_MAP[C::LOGIN_REQUEST] = C::AUTH_SERVICE;
$ACTION_MAP[C::GET_DATA] = C::ORDER_SERVICE;




 ?>