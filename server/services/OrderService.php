<?php 

require_once __DIR__ . '/../db/DB.php';
require_once __DIR__ . '/../constants/Constants.php';
use Constants as C;

class OrderService {

	const ACTION_MAP = [
		C::GET_DATA => 'getData'
	];


	public static function getData($data) {
		$db = DB::getInstance();
		$token = $data['token'];
		
		if($token) {
			$firstIndex =  $data['firstIndex'];
			$lastIndex = $data['lastIndex'];
			$responseData = array();		
			$responseData['items'] = array();
			$responseData['order'] = array();
			$responseData['total'] = $db->count(C::ORDERS_TABLE);
			$items = $db->select('orders', '*', [
				'LIMIT' => [$firstIndex, $lastIndex - $firstIndex + 1],
				'ORDER' => ['create_time' => 'DESC'],
				//'GROUP' => 'create_time'
			]);
			//echo json_encode($items);
			foreach($items as $item) {
				$responseData['items'][$item['id']] = $item;
				$responseData['order'][] = $item['id'];
			}
			echo json_encode($responseData);
		} else {
			$arr = [];
			$arr['authorized'] = false;
			echo json_encode($arr);
		}
	}

	


}





 ?>