const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

// Initialiser "express"
const app = express();

//BodyParser Middleware
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongoDB

mongoose
        .connect(db)
        .then( ()=> console.log('MongoDB conntected...') )
        .catch( err => console.log(err));

//Use routes
app.use('/api/items' , items);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server started on port ${port}`));
