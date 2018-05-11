var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + "client"));

var reservations = [{
	name: 'DIAZ INN',
	phone: '80108884',
	email: 'iamjeremydiaz@jeremydiaz.com',
	id: 5
}];

var waitlist = [{
	name: 'Joan of Arc',
	phone: '3223',
	email: 'iamaperson@people.com',
	id: 522
}];

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/reservations", function (req, res) {
	res.sendFile(path.join(__dirname, "/reservations.html"));
});

app.get("/table", function (req, res) {
	res.sendFile(path.join(__dirname, "/table.html"));
});

app.get("/api/:table", function (req, res) {
	var table = req.params.table;

	if (table === 'reservations') {
		return res.json(reservations);
	} else if (table === 'waitlist') {
		return res.json(waitlist);
	} else {
		return "No API found";
	}
});

function updatePage() {
	//populate
}

function getWaitlist(res) {
	return res.json(waitlist);
}

app.post("/reserve", function (req, res) {
	//get values from reservations page input

	if (reservations.length > 4) {
		//$ new div
		//$('name') etc

		alert('You have been added to the reservations list!');
	} else {
		//push to waitlist
		alert('You dun messed up j-j-jeremy. You are on the waitlist');
	}
});


app.listen(PORT, function () {
	console.log("App listening on port " + PORT);
});
