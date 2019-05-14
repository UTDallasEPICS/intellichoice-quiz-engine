const mongoose = require('mongoose');
const random = require('mongoose-random');
const Schema = mongoose.Schema;

let Question = new Schema({
  quiz_question:{
    type:String
  },
  quiz_answer:{
    type:Number
  },
  quiz_correctAnswer:{
    type:Number
  }
});
Question.plugin(random);
module.exports = mongoose.model('Question', Question);
