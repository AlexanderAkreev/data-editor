<?php 

require __DIR__ . '/../vendor/autoload.php';

use Medoo\Medoo;

/*
	Singleton для работы с DB
*/
class DB extends Medoo {

	private static $instance = null;

	private function __construct() {
		parent::__construct([
			// required
			'database_type' => 'mysql',
			'database_name' => 'data_editor',
			'server' => 'localhost',
			'username' => 'root',
			'password' => 'admin',
		 
			// [optional]
			'charset' => 'utf8',
			'collation' => 'utf8_general_ci',
			//'port' => 3306

			// Enable logging
			"logging" => true
		]);
	}

	private function __clone() {

	}

	private function __wakeup() {

	}

	public static function getInstance() {
		if (self::$instance == null) {
			self::$instance = new self;		
		}
		return self::$instance;
	}
}






 ?>