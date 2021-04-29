import React from 'react'
import Banner from '../components/Banner';
import Question2 from '../components/Question2';
import {Component} from "react";
export default class Question2DisplayForm extends Component{

//File is the display the question to use and accept answer input.

    constructor(props) {
        super(props);
        this.state = { 
                       topic: this.props.location.state.topic,
                      // color: this.props.location.state.color,
                       questions: this.props.location.state.questions,
                       color: '#00B971'};        
    }

   
   
    render(){
    return (
        <>
            <Banner text={this.state.topic} color={this.state.color}></Banner>
            <Question2 ques = {this.state.questions}></Question2>
            {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Addition</h1>
            </div> */}
        </>
    )
}}


