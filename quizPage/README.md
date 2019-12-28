#App.js contains the bulk of the logic as of time of writing.

#Current logic for the quiz is that once the questions reaches the last one and it is answered it progresses towards the results page. Ideally in the future make a submit button so that navigation back and forth is possible before submission. 

#There are  5 components with the way it was built: Quiz, Results, QuestionCount, AnswerOption, Question.

#Quiz component renders the interface for the quiz, by presenting the anwer options along with the questions and the question counts on the very top

#Results renders the result page after the quiz ends and the results are to be displayed.

#AnswerOption contians the specifics that each anwer option have 

#currenlty quizQuestions.js is just a json format file to load the questions, with the goal to connect it to the api provided by the team of Fall 2018
