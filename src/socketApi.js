
const socketio = require('socket.io');
const io = socketio();

const socketApi = {
    io
}

io.on('connection',socket =>{
    console.log('Socketio Connection is ON')
})

module.exports = socketApi;


