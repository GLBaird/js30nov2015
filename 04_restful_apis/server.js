// make Express App
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// data store
var names = [];

app.get("/names", function(req, res) {
    console.log("Request for names");
    res.json(names);
});

app.get("/names/:record", function(req, res) {
    var index = req.params.record;
    if (typeof names[index] === "string") {
        res.send(names[index]);
    } else {
        res.status(404).send("No such name by index");
    }
});

var urlBody = bodyParser.urlencoded({ extended: false });
app.post("/names", urlBody, function(req, res){
    if (typeof req.body.name === "string") {
        names.push(req.body.name);
        res.end();
    } else {
        res.status(500).send("Missing Name Parameter");
    }
});

app.delete("/names/:record", function(req, res) {
    var index = req.params.record;
    if(typeof names[index] === "string") {
        names.splice(index, 1);
        res.end();
    } else {
        res.status(404).send("Can't find record to delete");
    }
});

app.use(express.static("public"));

app.use("*", function(req, res){
    res.status(404).send("<b>Error 404</b> file not found!");
});


// start the server
app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});