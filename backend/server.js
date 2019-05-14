const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const questionRoutes = express.Router();
{/*Just added:5.2.19*/}
const random = require('mongoose-random');
const PORT = 4000;

let Question = require('./question.model');


app.use(cors());
app.use(bodyParser.json());
{/*mongoose.connect('mongodb://127.0.0.1:27017/questions',{useNewUrlParser:true});*/}

{/*mongodb+srv://jibib:epics@epics-gfiji.mongodb.net/test?retryWrites=true*/}
{/*mongodb+srv://mahim:mahim@epics-lyhdo.azure.mongodb.net/test?retryWrites=true*/}
{/*CHANGE THE SCHEMA FOR THE ACTUAL DATABASE TO WORK*/}
mongoose.connect('mongodb+srv://jibib:epics@epics-gfiji.mongodb.net/test?retryWrites=true', {useNewUrlParser:true});
const connection = mongoose.connection;

connection.once('open',function()
{console.log("MongoDB database connection established successfully");})


{/*Just added:5.2.19*/}
Question.findRandom().limit(1).exec(function(err,questions) {console.log(questions);});

questionRoutes.route('/').get(function(req,res) {
  Question.find(function(err,question) {
    if(err) {
      console.log(err);
    }
    else {
      res.json(question);
    }
  });
});

questionRoutes.route('/:id').get(function(req,res) {
  let id = req.params.id;
  Question.findById(id, function(err,question) {
    res.json(question);
  });
});

questionRoutes.route('/update/:id').post(function(req, res) {
    Question.findById(req.params.id, function(err, question) {
        if (!question)
            res.status(404).send("data is not found");
        else
            question.quiz_answer = req.body.quiz_answer;

            question.save().then(question => {
                res.json('Question updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

questionRoutes.route('/add').post(function(req,res) {
  let question = new Question(req.body);
  question.save()
    .then(question => {
      res.status(200).json({'question':'question added successfully'});
    })
    .catch(err => {
      res.status(400).send('adding new question failed');
    });
});

app.use('/questions',questionRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
