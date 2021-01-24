const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = require('../../models/Question');

//create schema

//This file would have similar purpose as Question.js file. However, we have been told by client quizzes are not currently necessary.
const QuizSchema = new Schema ({
    
    topic:{
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    questions:{
        type: [Object] 
    }
   
        
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
