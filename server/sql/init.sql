CREATE DATABASE IF NOT EXISTS data_editor CHARACTER SET utf8 COLLATE utf8_general_ci;
USE data_editor;

CREATE TABLE IF NOT EXISTS users (
    id varchar(255) PRIMARY KEY, 
	name varchar(255) NOT NULL, 
	email varchar(255) NOT NULL, 
	phone varchar(255) NOT NULL, 
	login varchar(255) NOT NULL, 
	password varchar(255) NOT NULL, 
	login_time bigint unsigned, 
	create_time bigint unsigned NOT NULL, 
	token varchar(255) 
);

CREATE TABLE IF NOT EXISTS orders (
	id varchar(255) PRIMARY KEY, 
	order_number int unsigned, 
	purchased_from varchar(255),  
	purchased_time bigint unsigned, 
	bill_to_name varchar(255), 
	deliver_name varchar(255), 
	gt_base decimal(13,2), 
	gt_purchased decimal(13,2), 
	preorder varchar(255), 
	status varchar(255), 
	assignation varchar(255), 
	create_time bigint unsigned NOT NULL, 
	edit_time bigint unsigned NOT NULL, 
	created_by varchar(255) NOT NULL 
);

CREATE TABLE IF NOT EXISTS applications (
    id varchar(255) PRIMARY KEY, 
	order_number varchar(255), 
	operation_type varchar(255), 
	customer_name varchar(255), 
	doc_type varchar(255), 
	passport_num_serial varchar(255), 
	passport_receive_date varchar(255), 
	passport_issued_by varchar(255), 
	return_goods varchar(255),  
	count int NOT NULL, 
	lot_number int unsigned, 
	return_cause varchar(255),  
	good_state varchar(255), 
	check_number varchar(255),
	purchase_time bigint unsigned, 
	purchase_place varchar(255),
	return_sum decimal(13,2), 
	payment_method varchar(255), 
	account_holder_name varchar(255), 
	bank_name varchar(255), 
	bic varchar(255), 
	correspondent_account varchar(255), 
	transaction_account varchar(255), 
	exchange_goods varchar(255), 
	exchange_cause varchar(255), 
	for_what_exchange varchar(1000), 
	how_exchange varchar(255), 
	exchange_time bigint unsigned, 
	delivery_address varchar(255), 
	exchange_address varchar(255), 
	create_time bigint unsigned NOT NULL, 
	edit_time bigint unsigned NOT NULL, 
	created_by varchar(255) NOT NULL 
);