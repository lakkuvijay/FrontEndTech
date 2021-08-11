//create the http server
//create the chat server
//assign the port number
//connect, receive , send and close


//import http module
const http = require("http");


//create the chat server
const server = require("websocket").server;


//assign the port
let socket = new server({
    httpServer : http.createServer().listen(8080,()=>{
        console.log("port number assigned successfully");
    })
});


//connect , receive data, send data and close the connection
socket.on("request",function(request){
    let connection = request.accept(null,request.origin);
    connection.on("message",function(message){
        console.log(message.utf8Data);
        connection.sendUTF("Hello_1");
        connection.sendUTF("Hello_2");
        setTimeout(()=>{
            connection.sendUTF("Hello_3");
        },10000);

    });

    connection.on("close",function(connection){
        console.log("connection closed");
    })
});











