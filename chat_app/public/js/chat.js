// Init socket.io
const socket = io();

socket.on('countUpdated', (count) => {
	console.log(count);
});

const incrementButton = window.document.getElementById('increment');

incrementButton.addEventListener('click', (event) => {
	socket.emit('increment');
});

