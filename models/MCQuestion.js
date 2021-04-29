const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema
const MCQuestionSchema = new Schema ({

    /*
    *
    *
    * 
    fields each question will include. This file is like the variable definitions in a class. 
    Can be changed in the future depending on project needs but be careful to change to other 
    files such as forms and requests to database.
    *
    *
    */
    
    topic:{
        type: String,
        required: true
    },
    subtopic:{
        type: String,
        required: true
    },
    problem:{
        type: String,
        required: true
    },
    correctAnswer:{
        type: String,
        required: true
    },
    wrongAnswer1:{
        type: String,
        required: true
    },
    wrongAnswer2:{
        type: String,
        required: true
    },
    wrongAnswer3:{
        type: String,
        required: true
    },
    hint:{
        type: String,
        required: true
    },
    difficulty:{
        type: String,
        required: true
    },
    gradeLevel:{
        type: String,
        required: true
    },
    date:{                              //automatically created field for date question is created and stored in database
        type: Date,
        default: Date.now
    },
});

module.exports = MCQuestion = mongoose.model('mcquestion', MCQuestionSchema);
