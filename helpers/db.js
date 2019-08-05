const mongoose = require('mongoose');

// let envString = process.env.DB_STRING.toString() ;

// const isString = (arg)=>{
//     return typeof arg === 'string';
// }

mongoose.connect('mongodb://localhost/socketio-chatting-app', { useNewUrlParser: true});

mongoose.connection.on('open',()=>{
    console.log('MongoDB : Connected.');
    // console.log(isString(envString));
})
mongoose.connection.on('error',()=>{
    console.log('MongDB : Error!!');
})
mongoose.Promise = global.Promise ;
