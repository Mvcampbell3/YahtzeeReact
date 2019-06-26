import React from 'react';
import "./highscore.css"

const HighScore = (props) => {
  return (
    <div className="highscore">
        <h4>{props.username}</h4>
        <h4>{props.date}</h4>
        <h4>{props.score}</h4>
    </div>
  );
}

export default HighScore;