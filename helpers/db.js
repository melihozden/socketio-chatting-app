const mongoose = require('mongoose');

mongoose.connect(' mongodb://localhost/socketio-chatting-app', { useNewUrlParser: true});

mongoose.connection.on('open',()=>{
    console.log('MongoDB : Connected.');
})
mongoose.connection.on('error',()=>{
    console.log('MongDB : Error!!');
})
mongoose.Promise = global.Promise ;
