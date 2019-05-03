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

io.on('connection', (socket) => {
	console.log('New Web Socket connection');

	const clientWelcomeMessage = 'Welcome!';

	socket.emit('welcome', clientWelcomeMessage);

	// get user message to all users
	socket.on('sendMessage', (message) => {
		io.emit('getMessage', message);
	});
});

server.listen('9000', () => {
	console.log('App listening on port 9000');
});

module.exports = server;
