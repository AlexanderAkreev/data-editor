<?php 

require_once __DIR__ . '/../db/DB.php';
require_once __DIR__ . '/../constants/Constants.php';
require_once __DIR__ . '/../util/util.php';
use Constants as C;

class AuthService {

	/*
		ACTION_MAP нужен для правильной работы ActionDispatcher
		он связывает название действия с методом, который его выполнит
	*/
	const ACTION_MAP = [
		C::LOGIN_REQUEST => 'login',
		C::LOGOUT_REQUEST => 'logout'
	];


	public static function login($data) {
		$db = DB::getInstance();
		$responseData = [
			'loginSuccess' => false
		];		
		if(isset($data['login']) && isset($data['password'])) {
			$login = $data['login'];
			$password = $data['password'];			
			$user = $db->get(
				C::USERS_TABLE, 
				'*',  
				[
					'login' => $login,
					'password' => $password,
				]
			);
			if($user) {
				$token = $user['login'] . uniqid();
				$db->update(
					C::USERS_TABLE, 
					[
						'token' => $token,
						'login_time' => getCurTime()
					], 
					[
						'id' => $user['id']
					]
				);
				$responseData['token'] = $token;
				$responseData['userId'] = $user['id'];
				$responseData['loginSuccess'] = true;
			}			
		} 
		echo json_encode($responseData);
	}

	public static function logout($data) {
		$db = DB::getInstance();
		$responseData = [
			'logoutSuccess' => false
		];
		if(isset($data['token']) && isset($data['userId'])) {
			$token = $data['token'];
			$userId = $data['userId'];
			$user = $db->get(C::USERS_TABLE, '*',  [
				'id' => $userId,
			]);
			if($user['token'] === $token) {
				$db->update(C::USERS_TABLE, [
					'token' => null,
					'login_time' => null
				], [
					'id' => $userId
				]);
				$responseData['logoutSuccess'] = true;
				echo json_encode($responseData);
				return;
			}									
		}
		trigger_error("Access token or user id is incorrect.", E_USER_ERROR);
	}
	

}





?>