const io = require('socket.io-client');
const URL = 'https://realtimefeed-api.wax.io/';
console.log(URL);
const socket = io.connect(URL, {
  transports: ['websocket']
});

socket.on('connect', () => {
  console.log(`connect`);
});

socket.on('case-opened', (event) => {
  console.log(event);
});