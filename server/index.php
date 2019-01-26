<?php 

/* все время в системе должно быть в формате UTC UNIX в миллисекундах */
date_default_timezone_set('UTC');

require_once __DIR__ . '/util/Logger.php';
$logger = new Logger(__DIR__ . '/log/log.txt');
$method = $_SERVER['REQUEST_METHOD'];
$error = false;

$body = file_get_contents('php://input');
$data = json_decode($body, true);
$actionType = $data['actionType'];

try {
	
	if ($method === 'POST') { 
		require __DIR__ . '/vendor/autoload.php';
		require_once __DIR__ . '/dispatcher/ActionDispatcher.php';
		header('Content-Type: application/json');	
		ActionDispatcher::dispatch();		
	} 

	if ($method === 'GET') {
		/*
			FRONTEND - метка, вместо которой build.py вставляет код index.html
		*/
		?><!--{{FRONTEND}}--> <?php
	}

} catch (Throwable $e) {
	$error = true;
	echo $e;
}

/*
	не логируем OPTIONS
*/
if($method === 'OPTIONS') {
	return;
}

if(!$error) {
	$logger->info($method . ' ' . $actionType);
} else {
	$logger->error($method . ' ' . $actionType . "\n" . $e);
}



?>