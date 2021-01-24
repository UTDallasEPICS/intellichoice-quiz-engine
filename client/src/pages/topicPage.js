import React  from 'react'
import {Component} from 'react'

import axios from 'axios'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'
import '../components/topicPageStyle.css';

export default class topicPage extends Component{


    constructor(props) {
        super(props);
        this.state = { grade: '2' , topics: [], questions: [], subtopics: []};
    }

    //get indices of each unique value. Used to display topics list to user.
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
     
    //retrieves question array from database.
    componentDidMount() {
        axios.get('./api/questions')
            .then(res => {
                //reduces array to questions with selected grade level
                this.setState({ questions: res.data.filter(question => question.gradeLevel === this.state.grade)}); 
                //reduces array to questions with selected topic
                this.setState({ topics: this.state.questions.map(a => a.topic) });
            })
            .catch(function (error) {
                console.log(error);
            })
            this.setState({ topics: this.state.topics.filter(this.onlyUnique)});
          
    };

    
   

    onClick = ({value}) =>{
    //adjust questions to be passed according to value selected
    this.setState({ subtopics: this.state.questions.filter(question => question.topic === value).map(a => a.subtopic) });
    
    //route to next page
    this.props.history.push({                           //pushes topic, grade, and questions to /subtopics page
        pathname: '/subtopics',
        state: {  
                topic: value,
                grade: this.state.grade,
                questions: this.state.questions 
             }}
        );

      };

    render(){
        return (
        <>
        <Banner text="Practice" color='#4CAF50'></Banner>
            {this.state.topics.filter(this.onlyUnique).map((value,index)=> { //filters database questions to display only unique topics. 
            
            //var rand = 'rgb(' + (Math.floor((256) * Math.random()) ) + ',' + (Math.floor((256) * Math.random()) ) + ',' + (Math.floor((256 ) * Math.random()) ) + ')';

            /* 

            Each topic is displayed with same styling in separate box. 
            this.onClick.bind passes topic in value to onClick function and sends info to next page
            
            */
             return <div style={{margin:'0 20%'}}>
                    <div class='subjectBox' key={index} onClick = {this.onClick.bind(this, {value})}>
                        <Subject key={index} text={value} color='#F39317'></Subject>
                    </div>
                </div>                  
            })}
       
      
        </>
    )
    }
}

