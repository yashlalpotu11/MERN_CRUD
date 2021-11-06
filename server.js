const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('./models/db')

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('cors')());
app.use(require('helmet')());
app.use('/api/students', require('./routes/students'));


//production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// app.get('/', (req, res) => {
//     res.send('Hello world!');
// })

app.listen(port, () => console.log(`Server started on port ${port}`));