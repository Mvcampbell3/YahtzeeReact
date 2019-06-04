import React, { Component } from 'react';
import "./home.css";

import dice1 from "../../images/1.jpg"
import dice2 from "../../images/2.jpg"
import dice3 from "../../images/3.jpg"
import dice4 from "../../images/4.jpg"
import dice5 from "../../images/5.jpg"
import dice6 from "../../images/6.jpg"
import blank from "../../images/Blankdie.jpg"

class Home extends Component {
  state = {
    showDie: true,
    dicePics: [blank, dice1, dice2, dice3, dice4, dice5, dice6],
    diceValue: [0, 0, 0, 0, 0],
    diceHold: [false, false, false, false, false],
    rollCount: 3,
    scoring: [
      { score: 0, saved: false, place: 0, click: true, value: 1, name: "Ones", scoreSystem: "number" },
      { score: 0, saved: false, place: 1, click: true, value: 2, name: "Twos", scoreSystem: "number" },
      { score: 0, saved: false, place: 2, click: true, value: 3, name: "Threes", scoreSystem: "number" },
      { score: 0, saved: false, place: 3, click: true, value: 4, name: "Fours", scoreSystem: "number" },
      { score: 0, saved: false, place: 4, click: true, value: 5, name: "Fives", scoreSystem: "number" },
      { score: 0, saved: false, place: 5, click: true, value: 6, name: "Sixes", scoreSystem: "number" },
      { score: 0, saved: false, place: 6, click: false, value: "upperSubTotal", name: "Upper Sub Total", scoreSystem: "totalPart" },
      { score: 0, saved: false, place: 7, click: false, value: "upperBonus", name: "Bonus", scoreSystem: "35" },
      { score: 0, saved: false, place: 8, click: false, value: "upperTotal", name: "Upper Total", scoreSystem: "totalPart" },
      { score: 0, saved: false, place: 9, click: true, value: "threeKind", name: "Three of a kind", scoreSystem: "total" },
      { score: 0, saved: false, place: 10, click: true, value: "fourKind", name: "Four of a kind", scoreSystem: "total" },
      { score: 0, saved: false, place: 11, click: true, value: "fullHouse", name: "Full House", scoreSystem: "fullHouse" },
      { score: 0, saved: false, place: 12, click: true, value: 30, name: "Small Straight", scoreSystem: "straight" },
      { score: 0, saved: false, place: 13, click: true, value: 40, name: "Large Straight", scoreSystem: "straight" },
      { score: 0, saved: false, place: 14, click: true, value: 50, name: "Yahtzee", scoreSystem: "yahztee" },
      { score: 0, saved: false, place: 15, click: true, value: "chance", name: "Chance", scoreSystem: "total" },
      { score: 0, saved: false, place: 16, click: true, value: "bonusYahtzee", name: "Bonus Yahtzee", scoreSystem: "bonusYahtzee" },
      { score: 0, saved: false, place: 17, click: false, value: "lowerTotal", name: "Lower Total", scoreSystem: "totalPart" },
      { score: 0, saved: false, place: 18, click: false, value: "total", name: "Total Score", scoreSystem: "totalAll" }
    ],
    bonusYahtzee: false,
    firstYahtzee: false

  }

  rollDice = () => {
    if (this.state.rollCount > 0) {

      const dice = this.state.diceValue;
      const holds = this.state.diceHold;
      const newDice = []
      for (let i = 0; i < dice.length; i++) {
        if (holds[i] !== true) {
          const rdmNum = Math.floor((Math.random() * 6) + 1);
          console.log(rdmNum);
          newDice.push(rdmNum);
        } else {
          newDice.push(dice[i])
        }
      }
      console.log(newDice);
      // Can check for Yahtzee here
      this.setState({ diceValue: newDice, rollCount: this.state.rollCount - 1 })
    }
  }

  resetRound = () => {
    this.setState({ rollCount: 3, diceHold: [false, false, false, false, false], diceValue: [0, 0, 0, 0, 0] })
  }

  holdButtonHandle = e => {
    console.log(e.target.value);
    const whichHold = e.target.value;
    const holds = this.state.diceHold;
    holds[whichHold] = !holds[whichHold];;
    console.log(holds)
    this.setState({ diceHold: holds })
  }

  testScore = (value, name, scoringSystem, place, saved) => {
    console.log(value, name, scoringSystem, place)
    // const oldScore = this.state.scoring[place].score;
    const dice = this.state.diceValue;
    console.log(dice)
    // console.log(oldScore)
    const scoring = this.state.scoring;
    scoring.forEach(one => {
      if (one.saved === false && one.click === true) {
        one.score = 0;
      }
    })
    let saveNum = 0;
    //Switch For Scoring System!!
    switch (scoringSystem) {
      case "number":
        console.log("this is a number score");
        if (dice.indexOf(value) >= 0) {
          const numberValue = dice.filter(each => each === value).reduce((amt, tot) => amt + tot);
          console.log(numberValue);
          saveNum = numberValue;
        } else {
          console.log(`There are no ${value}'s`)
        }
        break;
      case "total":
        console.log("this is a total score");
        saveNum = dice.reduce((amt, tot) => amt + tot);
        break;
      case "fullHouse":
        console.log("this is the full house");
        break;
      case "straight":
        console.log("this is a straight");
        break;
      case "yahtzee":
        console.log("this is the yahtzee");
        break;
      case "bonusYahtzee":
        console.log("this is the bonus yahtzee")
        break;
      default:
        console.log("Scoring System Switch not working as expected");

    }

    // Secret Sauce Number 1 !!
    // This will probably be in a serpate funciton that adds all of the scores together on save
    this.setState((prevState => {
      prevState.scoring[place].score = saveNum;
      return prevState;
    }))
  }


  render() {

    return (
      <div>
        <div className="diceBox">
          <img src={this.state.dicePics[this.state.diceValue[0]]} className="die" alt="die1" />
          <img src={this.state.dicePics[this.state.diceValue[1]]} className="die" alt="die2" />
          <img src={this.state.dicePics[this.state.diceValue[2]]} className="die" alt="die3" />
          <img src={this.state.dicePics[this.state.diceValue[3]]} className="die" alt="die4" />
          <img src={this.state.dicePics[this.state.diceValue[4]]} className="die" alt="die5" />
        </div>
        <div className="holdsBox">
          <button value={0} className={this.state.diceHold[0] ? "unhold" : "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[0] ? "Unhold" : "Hold"}</button>
          <button value={1} className={this.state.diceHold[1] ? "unhold" : "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[1] ? "Unhold" : "Hold"}</button>
          <button value={2} className={this.state.diceHold[2] ? "unhold" : "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[2] ? "Unhold" : "Hold"}</button>
          <button value={3} className={this.state.diceHold[3] ? "unhold" : "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[3] ? "Unhold" : "Hold"}</button>
          <button value={4} className={this.state.diceHold[4] ? "unhold" : "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[4] ? "Unhold" : "Hold"}</button>
        </div>
        <button onClick={this.rollDice}>Roll</button>
        <button onClick={this.resetRound}>Clear</button>
        <div className="scoringGrid">
          {this.state.scoring.map(score =>
            <div key={score.name} className={score.name === "total" ? "totalScore" : "score"}>
              <p>{score.name}</p>
              {score.click ?
                <button
                  onClick={() => this.testScore(score.value, score.name, score.scoreSystem, score.place, score.saved)}
                >Score</button>
                : null}
              <p>{score.score}</p>
            </div>)}
        </div>
      </div>
    );
  }
}

export default Home;