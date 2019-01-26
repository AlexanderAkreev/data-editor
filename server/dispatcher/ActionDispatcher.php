<?php 

require_once __DIR__ . '/action_map.php';



class ActionDispatcher {
	/*
		метод вызывает нужный обработчик, в зависимости от названия действия, указанного в $actionType
	*/
	public static function dispatch() {
		$body = file_get_contents('php://input');
		$data = json_decode($body, true);
		$actionType = $data['actionType'];
		global $ACTION_MAP;
		$service = $ACTION_MAP[$actionType];		
		if($service) {
			require_once __DIR__ . '/../services/' . $service . '.php';
			$method = $service::ACTION_MAP[$actionType];
			$service::$method($data);
		} else {
			trigger_error("Service for $actionType doesn't exist.", E_USER_ERROR);
		}
	}

}









 ?>