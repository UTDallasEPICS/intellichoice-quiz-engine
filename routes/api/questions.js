const express = require('express');
const router = express.Router();

//question model
const Question = require('../../models/Question');



//@route GET api/questions
//@desc Get all questions
//@acces public

router.get('/', (req, res) =>{
    Question.find()
        .then(questions => res.json(questions))
});




//@route POST api/questions
//@desc Create questions
//@acces public

router.post('/', (req, res) =>{
   const newQuestion = new Question({
       topic: req.body.topic,
       subtopic: req.body.subtopic,
       problem: req.body.problem,
       correctAnswer: req.body.correctAnswer,
       gradeLevel: req.body.gradeLevel,
       difficulty: req.body.difficulty
   });

   newQuestion.save().then(question => {
       return res.json(question);
   });

});


//@route delete api/questions
//@desc delete questions
//@acces public


router.delete('/:id', (req, res)=> {
    Question.findById(req.params.id)
    .then(question =>question.remove().then(() => res.json({success: true})))
    .catch(err =>res.status(404).json({succuss: false}));
});


module.exports = router;