const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connect',function(sock) {
    console.log(socket.id)
})

server.listen(process.env.PORT ?? 3000);