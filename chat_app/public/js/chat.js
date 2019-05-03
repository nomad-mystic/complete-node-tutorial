// Init socket.io
const socket = io();

// DOM elements
const welcomeEl = window.document.getElementById('welcome');
const userInputText = window.document.getElementById('user-input-text');
const userMessage = window.document.getElementById('user-message');
const userMessageSubmit = window.document.getElementById('user-message-submit');

socket.on('welcome', (welcomeMessage) => {
	welcomeEl.innerText = welcomeMessage;
});

userMessageSubmit.addEventListener('click', (event) => {
	socket.emit('sendMessage', userMessage.value);
});

socket.on('getMessage', (message) => {
	userInputText.innerText = message;
});
