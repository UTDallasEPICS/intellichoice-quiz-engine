const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const questions = require('./routes/api/questions')
const mcquestions = require('./routes/api/mcquestions')
const app = express();

//middle ware bp
app.use(bodyParser.json());

//DB Config
let dotenv = require('dotenv');
dotenv.config();
const db = process.env.mongoURI;
//const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
    .connect(db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('mongo connected'))
    .catch(err => console.log(err));

//use routes (POST, GET) in questions.js api
app.use('/api/questions', questions);
app.use('/api/mcquestions', mcquestions);
const port = process.env.PORT || 5000; //define port


//start server on that port    
app.listen(port, () => console.log(`Server started on port ${port}` )); 

