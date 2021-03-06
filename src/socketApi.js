
const socketio = require('socket.io');
const io = socketio();

const socketApi = {
    io
}

const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({
     host: process.env.REDIS_URI, 
     port: process.env.REDIS_PORT
    }));

io.on('connection',socket =>{
    console.log('Socketio Connection is ON')

    socket.broadcast.emit('hello')
})


module.exports = socketApi;


