import React, { Component } from 'react';
import "./scores.css";
import API from  "../../utils/API"
import HighScore from "../../components/HighScore";

class Scores extends Component {
  state = {
    highScores: []
  }

  componentDidMount() {
    this.getHighScores()
  }

  getHighScores = () => {
    API.getHighScores()
      .then(result => {
        console.log(result);
        this.setState({ highScores: result.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        {this.state.highScores.length > 0 ?
          <div className="highscoreBox">
            <div className="highscore">
              <h4>Username</h4>
              <h4>Date</h4>
              <h4>Score</h4>
            </div>
            {this.state.highScores.map(each =>
              <HighScore score={each.score} username={each.username} key={each._id} date={each.date} />
            )}
          </div> : null
        }
      </div>
    );
  }
}
export default Scores;