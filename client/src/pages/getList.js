
import axios from 'axios'
import '../components/Banner/style.css'

export default function getList(grade , topicName) {        //receives student grade level and topic clicked
    let ques = [];
    axios.get('http://localhost:3000/api/questions')
        .then(res => {
            ques = res.data                                 //gets all questions from database

            /***** 
            
            hard coded gradeLevel and topic, but ideally these 
            variables would be passed from main site from user profile
            
            *****/
            ques = ques.filter(question =>question.gradeLevel === '2' && question.topic === 'addition');//filters question to only include 2 grade and addition questions.
            ques = ques.map(a => a.subtopic); //filters ques to be list of subtopics
        })
        .catch(function (error) {
            console.log(error);
        })
        return ques;                                        //returns array of applicable subtopics
    }     