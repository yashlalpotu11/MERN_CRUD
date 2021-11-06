const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/STUDENTS', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Database is connected');
}).catch(err => {
    console.log(err);
});


// const mongoose = require('mongoose');
// // Allow Promises
// mongoose.Promise = global.Promise;
// // Connection
// mongoose.connect('mongodb://localhost:27017/STUDENTS', { useNewUrlParser: true });
// // Validation
// mongoose.connection
//   .once('open', () => console.log('Connected to the database!'))
//   .on('error', err => console.log('Error with the database!', err));