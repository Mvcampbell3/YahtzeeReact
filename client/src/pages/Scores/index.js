import React, { Component } from 'react';
import "./scores.css";
import API from "../../utils/API"
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
        {this.props.user ? 
        <h1 className="textCenter">Highscores</h1> : null }
        {this.state.highScores.length > 0 ?
          <div className="highscoreBox">
            <div className="highscore">
              <h5>Rank</h5>
              <h5>Username</h5>
              <h5>Date</h5>
              <h5>Score</h5>
            </div>
            {this.state.highScores.map((each, index) =>
              <HighScore score={each.score} username={each.username} key={index} date={each.date} index={index + 1} />
            )}
          </div> : null
        }
      </div>
    );
  }
}
export default Scores;