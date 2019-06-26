import React from 'react';
import "./scores.css";
import HighScore from "../../components/HighScore";

const Scores = props => {

  return (
    <div>
      {props.scores.length > 0 ?
        <div className="highscoreBox">
          <div className="highscore">
            <h4>Username</h4>
            <h4>Date</h4>
            <h4>Score</h4>
          </div>
          {props.scores.map(each =>
            <HighScore score={each.score} username={each.username} key={each._id} date={each.date} />
          )}
        </div> : null
      }
    </div>
  );
}
export default Scores;