Проект состоит из двух частей:

	1 - client:
		Содержит frontend-часть. Написана c применением React + Redux.
		Проект собирается webpack. 

		Сборка production запускается через командную строку:
			- cd C:\xampp\htdocs\data-editor-dev\client
			- npm run build

		Собранный дистрибутив:
			- C:\xampp\htdocs\data-editor-dev\client\dist

		Командa для запуска webpack-dev-server:
			- npm start
		webpack-dev-server автоматически откроет браузер на странице localhost:9000. При изменении файлов проекта страница будет перезагружаться автоматически.

		Основной файл конфигурации webpack:
			- C:\xampp\htdocs\data-editor-dev\client\webpack.config.js

		Необходимые команды можно настроить в:
			- C:\xampp\htdocs\data-editor-dev\client\package.json
	2 - server
		Просто php + библиотеки, загруженные через composer.
		Файл C:\xampp\htdocs\data-editor-dev\server\init.sql содержит команды для создания БД и таблиц, а так же пояснения к данных

Дополнительно:

	C:\xampp\htdocs\data-editor-dev\build.py:
		Запускает сборку frontend части. Копирует все необходимые для полноценной работы приложения файлы из C:\xampp\htdocs\data-editor-dev в
		C:\xampp\htdocs\data-editor-prod и осуществляет интеграцию frontend с backend

	Команды для запуска полной сборки:
		- cd C:\xampp\htdocs\data-editor-dev\
		- py build.py
	после сборки приложение доступно по адресу: 
		- data-editor-prod/

	Подключение к БД настраивается в:
		- C:\xampp\htdocs\data-editor-dev\server\db\DB.php
	Адрес СУБД:
		- http://localhost/phpmyadmin/
	Название БД
		- data-editor
	Пароль и логин можно посмотреть в таблице users (пароли пока не хешируются)

	Сгенерировать и сохранить в БД тестовые данные можно через:
		- C:\xampp\htdocs\data-editor-dev\server\util\util.php 

	в инструментах разработчика Chrome есть дополнительные расширения
	для разработки React+Redux:
		- Redux DevTools
		- React Developer Tools
	