import React from 'react';
import "./scorebox.css";

const ScoreBox = (props) => {
  const {score} = props;
  return (
    <div className={score.click ? "score" : "totalScore"}>
      {score.click ?
        <div className={score.saved ? "scoreBtn saved" : "scoreBtn unsaved"}
          onClick={props.bonusYahtzee ? () => props.bonusYahtzeeScoring(score.value, score.name, score.scoreSystem, score.place, score.saved) : () => props.testScore(score.value, score.name, score.scoreSystem, score.place, score.saved)}
        ></div>
        : null}
      <p>{score.name}</p>
      <p>{score.score}</p>
    </div>
  );
}

export default ScoreBox;