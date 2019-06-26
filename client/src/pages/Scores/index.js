import React from 'react';
import "./scores.css";

const Scores = props => {

  return (
    <div>
      <div>
        {props.scores.map(each =>
          <div key={each._id}>
            <h2>{each.score}</h2>
            <h4>{each.username}</h4>
            <h4>{each.date}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
export default Scores;