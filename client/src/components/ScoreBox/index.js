import React from 'react';
import "./scorebox.css";

const ScoreBox = (props) => {
  const {score} = props;
  return (
    <div className={score.click ? "score" : "totalScore"}>
      {score.click ?
        <div className={score.saved ? "scoreBtn saved" : score.x === 0 ?"scoreBtn unsaved" : "scoreBtn clicked"}
          onClick={props.bonusYahtzee ? () => props.bonusYahtzeeScoring(score.value, score.name, score.scoreSystem, score.place, score.saved) : () => props.testScore(score.value, score.name, score.scoreSystem, score.place, score.saved)}
        ></div>
        : null}
      <p className="scoreText">{score.name}</p>
      <p className="scoreText">{score.score}</p>
    </div>
  );
}

export default ScoreBox;