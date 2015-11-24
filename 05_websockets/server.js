var express = require("express");
var app = express();

app.use(express.static("public"));


var server = app.listen(3000, function() {
    console.log("Listening on port 3000");
});

// setup web sockets

var WebSocketServer = require('websocket').server;

var websockets = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

websockets.on("request", function(req) {

    console.log("Request for a socket");

    var connection = req.accept("echo-protocol", req.origin);

    connection.on("message", function(message) {

        console.log("Message received: "+message.utf8Data);
        connection.sendUTF("Message received");

    });

    connection.sendUTF("Welcome to the server");

    connection.on("close", function() {
        console.log("Client left the chat room");
    });

});