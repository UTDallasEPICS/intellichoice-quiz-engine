import React from "react";
import PropTypes from "prop-types";

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <div>
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerCorrect === props.answer}
          id={props.answerType}
          value={props.answerCorrect}
          //disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </div>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerCorrect: PropTypes.bool.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
