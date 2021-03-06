import React, { Component } from 'react';
import API from "../../../utils/API"

import HighScore from "../../components/HighScore";
import Header from '../../components/Header';

class UserPage extends Component {

  state = {
    username: null,
    scores: []
  }

  componentDidMount() {
    this.getScores()
  }

  getScores = () => {
    API.getUserHighscores()
      .then(result => {
        this.setState({ scores: result.data })
      })
      .catch(err => {
        // console.log(err)
      })
  }

  render() {
    return (
      <div>
        <Header />
        <h1 className="textCenter">{`${this.props.username}'s Highscores`}</h1>
        {this.state.scores.length > 0 ?
          <div className="highscoreBox">
            <div className="highscore">
              <h5>Rank</h5>
              <h5>Username</h5>
              <h5>Date</h5>
              <h5>Score</h5>
            </div>
            {this.state.scores.map((each, index) =>
              <HighScore score={each.score} username={each.username} key={each._id} date={each.date} index={index + 1} />
            )}
          </div> : null
        }
      </div>
    );
  }
}

export default UserPage;