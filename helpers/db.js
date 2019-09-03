const mongoose = require('mongoose');

// let envString = process.env.DB_STRING.toString() ;

// const isString = (arg)=>{
//     return typeof arg === 'string';
// }

    mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });

    mongoose.connection.on('open', () => {
        console.log('MongoDB : Connected.');
        // console.log(isString(envString));
    })
    mongoose.connection.on('error', (err) => {
        console.log('MongDB : Error!!', err);
    })
    mongoose.Promise = global.Promise;
