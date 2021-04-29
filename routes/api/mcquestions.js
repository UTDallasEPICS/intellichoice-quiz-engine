const express = require('express');
const router = express.Router();

//question model
const MCQuestion = require('../../models/MCQuestion');

//need to add random numgenerator

//Need to add math_function.js and submission_box.js here?

//@route GET api/mcquestions
//@desc Get all mcquestions
//@acces public

router.get('/', (req, res) =>{
    MCQuestion.find()
        .then(mcquestions => res.json(mcquestions))
});




//@route POST api/mcquestions
//@desc Create mcquestions
//@acces public

router.post('/', (req, res) =>{
   const newMCQuestion = new MCQuestion({
       topic: req.body.topic,
       subtopic: req.body.subtopic,
       problem: req.body.problem,
       correctAnswer: req.body.correctAnswer,
       wrongAnswer1: req.body.wrongAnswer1,
       wrongAnswer2: req.body.wrongAnswer2,
       wrongAnswer3: req.body.wrongAnswer3,
       hint: req.body.hint,
       gradeLevel: req.body.gradeLevel,
       difficulty: req.body.difficulty
   });

   newMCQuestion.save().then(mcquestion => {
       return res.json(mcquestion);
   });

});


//@route delete api/mcquestions
//@desc delete mcquestions
//@acces public


router.delete('/:id', (req, res)=> {
    MCQuestion.findById(req.params.id)
    .then(mcquestion =>mcquestion.remove().then(() => res.json({success: true})))
    .catch(err =>res.status(404).json({succuss: false}));
});


module.exports = router;