const mongoose = require('mongoose');

mongoose.connect(process.env.DB_STRING);

mongoose.connection.on('open',()=>{
    console.log('MongoDB : Connected.');
})
mongoose.connection.on('error',()=>{
    console.log('MongDB : Error!!');
})
mongoose.Promise = global.Promise ;
