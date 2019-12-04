import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3002');
const subscribeToMachines = function (id, cb) {
    socket.on('machinesChange', data => cb(data));
    socket.emit('machinesChange', id);
};

export {subscribeToMachines};