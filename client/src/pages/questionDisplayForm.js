import React from 'react'
import Banner from '../components/Banner';
import Question from '../components/Question';
import {Component} from "react";
export default class questionDisplayForm extends Component{

//File is the display the question to use and accept answer input.

    constructor(props) {
        super(props);
        this.state = { symbol: this.props.location.state.symbol, 
                       min: this.props.location.state.min, 
                       max: this.props.location.state.max,
                       topic: this.props.location.state.topic,
                       color: this.props.location.state.color };
    }

    render(){
    return (
        <>
            <Banner text={this.state.topic} color={this.state.color}></Banner>
            <Question symbol = {this.state.symbol} max1 = {this.state.min} max2 ={this.state.max}></Question>
            {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Addition</h1>
            </div> */}
        </>
    )
}}

