<?php 

require __DIR__ . '/../vendor/autoload.php';
require_once 'models/User.php';
require_once 'models/Order.php';
require_once 'models/Application.php';
require_once __DIR__ . '/../db/DB.php';
use Ramsey\Uuid\Uuid;


/*
генерация тестовых данных
*/
function usersCreator($count) {
	$table = 'users';
	$db = DB::getInstance();
	while($count) {		
		$user = new User();
		$user->set('id', Uuid::uuid4()->toString());   
		$user->set('name', 'Name' . uniqid());   
		$user->set('email', $user->get('name') . '@mail.com');   
		$user->set('phone', mt_rand(100000, 999999));   
		// $user->set('login', 'admin' . ($db->count($table) + 1));   
		$user->set('login', 'a');   
		// $user->set('password', mt_rand(1000, 10000));   
		$user->set('password', 1);  // ПАРОЛЬ НУЖНО ХЕШИРОВАТЬ 
		$user->set('create_time', getCurTime());

		print($user->get('name'));
		print($user->get('create_time'));
		print($user);
		$db->insert($table, $user->getState()); 
		$count--;
	}
}

/*
генерация тестовых данных
*/
function ordersCreator($count) {
	$table = 'orders';
	$db = DB::getInstance();
	while($count) {	
		$order = new Order();
		$order->set('id', Uuid::uuid4()->toString());   
		$order->set('order_number', $db->count($table) + 1);   
		$order->set('purchased_from', 'Place' . uniqid());   
		$order->set('purchased_time', getCurTime());   
		$order->set('bill_to_name', 'Name' . uniqid());   
		$order->set('deliver_name', 'Name' . uniqid());   
		$order->set('gt_base', 1 / mt_rand(1, 10));
		$order->set('gt_purchased', 1 / mt_rand(1, 10)); 
		$order->set('preorder', 'not preorder'); 
		$order->set('status', 'Status' . uniqid()); 
		$order->set('assignation', 'assignation' . uniqid()); 
		$order->set('create_time', getCurTime()); 
		$order->set('edit_time', getCurTime()); 
		$order->set('created_by', 'user' . uniqid()); 
		$db->insert($table, $order->getState()); 
		$count--;
	}
}



/*
	возвращает значение в миллисекундах UNIX UTC
*/
function getCurTime() {
	date_default_timezone_set('UTC');
	return intval(round(microtime(true) * 1000));
}





?>