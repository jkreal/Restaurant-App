var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

var app = express();
var PORT = 3000;

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',
	password: 'goober',

	database: 'restaurant'
});