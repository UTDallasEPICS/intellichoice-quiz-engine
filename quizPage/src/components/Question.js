import React from 'react';
import Proptypes from 'prop-types';

function Question(props){
    return(
        <h2 className="question">{props.content}</h2>
    );
}

Question.propTypes ={
    content :Proptypes.string.isRequired
};

export default Question;