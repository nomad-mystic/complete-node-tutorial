const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const http = require('http');

// sever
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// middleware
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded());

let count = 0;
io.on('connection', (socket) => {
	console.log('New Web Socket connection');
	// Initial
	socket.emit('countUpdated', count);

	// From the Client
	socket.on('increment', () => {
		count++;

		// Just one Connect
		// socket.emit('countUpdated', count);

		// every connection
		io.emit('countUpdated', count);
	});
});

server.listen('9000', () => {
	console.log('App listening on port 9000');
});

module.exports = server;
