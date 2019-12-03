import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3002');
const subscribeToTimer = function (cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer');
};

export {subscribeToTimer};