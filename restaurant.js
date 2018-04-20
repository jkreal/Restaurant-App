var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

var app = express();
var PORT = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',
	password: 'goober',

	database: 'restaurant'
});

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/createreservation", function (req, res) {
	res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/table", function (req, res) {
	res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/:table", function (req, res) {
	var table = req.params.table;

	if (table === 'reservations') {
		//query mysql reservations table
	} else if (table === 'waitlist') {
		//query mysql waitlist table
	} else {
		//display that no api was found
	}
});

app.post("/api/reserve", function (req, res) {
	//get values from reservations page
	//query sql INSERT INTO
	//return whether it was inserted or not
});


app.listen(PORT, function () {
	console.log("App listening on port " + PORT);
});
