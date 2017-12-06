var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var resObj = [
  {
    name: "Power Clap",
    phoneNumber: "911",
    email: "powerClap@adult.com",
    uniqueID: "POWER CLAP!"
  }
]

// console.log(resObj);
var waitlist = [];
var reservations = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("This is running");
});

// front end routes
app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});



// back end routes
app.get("/api/waitlist", function(req, res) {
  res.sendFile(path.join(__dirname, "waitlist.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Create new reservation - takes in JSON input
app.post("/api/table", function(req, res) {
  var newreservation = req.body;

  if (reservations.length >= 5){
    waitlist.push(newreservation);
    console.log("This is the waitlist:");
    console.log(waitlist);
  } else {
    reservations.push(newreservation);

    console.log("These are the reservations:");
    console.log(reservations);
  }
  // reservations.push(newreservation)


  // newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

});

