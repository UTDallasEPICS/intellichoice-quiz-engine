import React, { Component } from 'react'
import axios from 'axios'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'
import '../components/topicPageStyle.css'

export default class subTopicPage extends Component{
    constructor(props) {
        super(props);
        this.state = { 
                       //subtopics: this.props.location.state.subtopics, 
                       topic: this.props.location.state.topic,
                       grade: this.props.location.state.grade,
                       questions: this.props.location.state.questions,
                       subtopics: [],
                     
    }}

  
    //see componentDidMount in topicPage.js
    componentDidMount() {
        let ques = [];
        axios.get('http://localhost:3000/api/questions')
            .then(res => {
                ques = res.data;
                ques = ques.filter(question =>question.gradeLevel === this.state.grade && question.topic === this.state.topic);
                ques = ques.map(a => a.subtopic);
                this.setState({ subtopics: ques });
               
            })
            .catch(function (error) {
                console.log(error);
            })
            return ques;
    };

    onClick = ({value}) =>{

        //route to next page
        console.log(this.state.questions);
        var ques = this.state.questions.filter(question =>question.subtopic === value);
        ques = ques.filter(question => question.topic === this.state.topic);
        ques = ques[0];
   
        var min;
        var max;
        var color;

        /**Variable values for min, max, path, symbol have been hard coded. 
         * These will be used for the randomly generated questions not
         * from the database that were requested by client. */

        if(value === "Hundreds"){
           min = 999;
           max = 999;
        }
        if(value === "Tens"){
           min = 99;
           max = 99;
        }
        if(value === "Thousands"){
           min = 9999;
           max = 9999;
        }
        if(value === "Ones"){
        min = 9;
        max = 9;
        }

       var path;
       var symbol;

        if(ques.topic === "Subtraction"){
            path = "/subtraction";
            symbol = '-';
            color='#EABC00';
        }
        if(ques.topic === "Addition"){
            path = "/addition";
            symbol = '+';
            color='#C83131';
        }
        if(ques.topic === "Multiplication"){
            path = "/multiplication";
            symbol = '*';
            color='#F39317';

        }
        if(ques.topic === "Division"){
            path = "/division";
            symbol = '/';
            color='#00B971';

        }

        //sends variable values to corresponding function so practice questions are displayed
        this.props.history.push({
            pathname: path, 
            state: {  symbol: symbol,
                      min: min,
                      max: max,
                      color:color, 
                      topic: this.state.topic}} );
      };

    

    render(){
        //see render of topicPage.js
        return (
            <>
            <Banner text="Practice" color='#4CAF50'></Banner>

                {this.state.subtopics.map((value,index)=> {
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