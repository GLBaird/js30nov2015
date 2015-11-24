
var websocket = new WebSocket("ws:localhost:3000", "echo-protocol");
websocket.onopen = function() {
    console.log("Socket is open");
};

websocket.onmessage = function (event) {
    var li = document.createElement("li");
    li.innerHTML = "Message from socket: "+event.data;
    document.getElementById("messages").appendChild(li);
};


function send() {
    var message = document.getElementById("message").value;
    websocket.send(message);
}