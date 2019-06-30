import React from 'react';
import "./highscore.css"

const HighScore = (props) => {
  return (
    <div className="highscore">
        <h5>{props.index}</h5>
        <h5>{props.username}</h5>
        <h5 className="dateHighScore">{props.date}</h5>
        <h5>{props.score}</h5>
    </div>
  );
}

export default HighScore;