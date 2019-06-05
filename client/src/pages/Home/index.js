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
    dicePics: [blank, dice1, dice2, dice3, dice4, dice5, dice6],
    diceValue: [0, 0, 0, 0, 0],
    diceHold: [false, false, false, false, false],
    rollCount: 103,
    showSave: false,
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
      { score: 0, saved: false, place: 9, click: true, value: "threeKind", name: "Three of a kind", scoreSystem: "kind" },
      { score: 0, saved: false, place: 10, click: true, value: "fourKind", name: "Four of a kind", scoreSystem: "kind" },
      { score: 0, saved: false, place: 11, click: true, value: "fullHouse", name: "Full House", scoreSystem: "fullHouse" },
      { score: 0, saved: false, place: 12, click: true, value: 30, name: "Small Straight", scoreSystem: "straight" },
      { score: 0, saved: false, place: 13, click: true, value: 40, name: "Large Straight", scoreSystem: "straight" },
      { score: 0, saved: false, place: 14, click: true, value: 50, name: "Yahtzee", scoreSystem: "yahtzee" },
      { score: 0, saved: false, place: 15, click: true, value: "chance", name: "Chance", scoreSystem: "total" },
      { score: 0, saved: false, place: 16, click: true, value: "bonusYahtzee", name: "Bonus Yahtzee", scoreSystem: "bonusYahtzee" },
      { score: 0, saved: false, place: 17, click: false, value: "lowerTotal", name: "Lower Total", scoreSystem: "totalPart" },
      { score: 0, saved: false, place: 18, click: false, value: "total", name: "Total Score", scoreSystem: "totalAll" }
    ],
    bonusYahtzee: false,
    firstYahtzee: false,
    savedYahtzee: false,
    previousPlace: null

  }

  clearUnsavedScores = () => {
    const scoring = this.state.scoring;
    // Reset the scores that are not saved
    scoring.forEach(one => {
      if (one.saved === false && one.click === true && one.value !== "bonusYahtzee") {
        one.score = 0;
      }
    })
  }

  rollDice = () => {
    if (this.state.rollCount > 0) {
      this.clearUnsavedScores();

      const dice = this.state.diceValue;
      const holds = this.state.diceHold;
      const newDice = []
      for (let i = 0; i < dice.length; i++) {
        if (holds[i] !== true) {
          const rdmNum = Math.floor((Math.random() * 1) + 1);
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
    this.setState({ rollCount: 103, diceHold: [false, false, false, false, false], diceValue: [0, 0, 0, 0, 0] })
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
    console.log(value, name, scoringSystem, place, saved)
    this.clearUnsavedScores();

    const scoring = this.state.scoring


    if (saved) {
      console.log("can't do that")
      return;
    }

    // Consts that the scoring system will need
    let saveNum = 0;
    const dice = this.state.diceValue;
    const totalSum = dice.reduce((amt, tot) => amt + tot);
    console.log(totalSum)
    const ones = dice.filter(each => each === 1)
    const twos = dice.filter(each => each === 2)
    const threes = dice.filter(each => each === 3)
    const fours = dice.filter(each => each === 4)
    const fives = dice.filter(each => each === 5)
    const sixes = dice.filter(each => each === 6)
    console.log(ones, twos, threes, fours, fives, sixes)
    const numbers = [ones, twos, threes, fours, fives, sixes]
    let scoredYahtzee;
    let bonusYahtzee;

    // Switch For Scoring System!!
    switch (scoringSystem) {

      case "number":
        console.log("this is a number score");
        if (dice.indexOf(value) >= 0) {
          const numberValue = dice.filter(each => each === value).reduce((amt, tot) => amt + tot);
          console.log(numberValue);
          saveNum = numberValue;
          scoredYahtzee = false;
        } else {
          console.log(`There are no ${value}'s`)
        }
        break;

      case "kind":
        console.log("This is a kind score");
        console.log(value);
        value === "threeKind" ?
          numbers.forEach(one => {
            if (one.length >= 3) {
              saveNum = totalSum;
              scoredYahtzee = false;
            }
          })
          :
          numbers.forEach(one => {
            if (one.length >= 4) {
              saveNum = totalSum;
              scoredYahtzee = false;
            }
          });
        break;

      case "total":
        console.log("this is a total score");
        saveNum = dice.reduce((amt, tot) => amt + tot);
        scoredYahtzee = false;
        break;

      case "fullHouse":
        console.log("this is the full house");
        const triple = numbers.filter((array) => array.length === 3)
        const double = numbers.filter((array) => array.length === 2)

        if (triple.length > 0 && double.length > 0) {
          console.log("fullhouse");
          saveNum = 25;
          scoredYahtzee = false;
        } else {
          console.log("no fullhouse");
        }
        break;

      case "straight":
        console.log("this is a straight");
        if (value === 30) {
          if ((dice.includes(1) && dice.includes(2) && dice.includes(3) && dice.includes(4)) ||
            (dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5)) ||
            (dice.includes(3) && dice.includes(4) && dice.includes(5) && dice.includes(6))) {
            console.log("small staight");
            saveNum = value;
            scoredYahtzee = false;
          } else {
            console.log("not a small staight")
          }
        } else {
          if ((dice.includes(1) && dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5)) ||
            (dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5) && dice.includes(6))) {
            console.log("large staight");
            saveNum = value;
            scoredYahtzee = false;
          } else {
            console.log("not a large staight")
          }
        }
        break;

      case "yahtzee":
        console.log("this is the yahtzee");
        const checkYahtzee = dice.filter(each => each === dice[0]);
        console.log(checkYahtzee.length)
        if (checkYahtzee.length === 5) {
          console.log("it's a yahtzee");
          saveNum = 50;
          scoredYahtzee = true;
        }
        break;

      case "bonusYahtzee":

        if (!this.state.bonusYahtzee && this.state.savedYahtzee && dice.filter(each => each === dice[0].length === 5)) {
          console.log("this is the bonus yahtzee")
          // bonusYahtzee = true;
          const valueCheck = scoring.filter(each => each.value === dice[0]);
          console.log(valueCheck)
          if (valueCheck[0].saved) {
            // saveNum = 100;
            bonusYahtzee = true;
            console.log("saved");
          } else {
            console.log("unsaved");
            console.log(scoring[16])
            const promiseArray = [
              this.setState((prevState) => {
                prevState.scoring[16].score = 100;
                prevState.scoring[valueCheck[0].place].score = totalSum;
                prevState.scoring[valueCheck[0].place].saved = true;
                return prevState;
              })]
            Promise.all(promiseArray)
              .then(result => {
                console.log("made it to the end of the promise")
                console.log(scoring[16])

                this.resetRound();
              })
              .catch(err => console.log(err))
          }
        }

        break;
      default:
        console.log("Scoring System Switch not working as expected");

    }

    // Secret Sauce Number 1 !!
    // This will probably be in a serpate funciton that adds all of the scores together on save
    this.setState((prevState => {
      if (value !== "bonusYahtzee") {
        prevState.scoring[place].score = saveNum;
      }
      prevState.showSave = true;
      prevState.previousPlace = place;
      if (scoredYahtzee && this.state.savedYahtzee === false) {
        prevState.firstYahtzee = true
      } else if (!scoredYahtzee && this.state.savedYahtzee === false) {
        prevState.firstYahtzee = false
      } else if (bonusYahtzee) {
        prevState.bonusYahtzee = true
        prevState.scoring[place].score += 100;
      }
      return prevState;
    }))
  }

  saveScore = () => {
    const where = this.state.previousPlace;
    this.setState((prevState) => {
      if (where !== 16) {
        prevState.scoring[where].saved = true;
      }
      prevState.bonusYahtzee = false;
      prevState.showSave = false;
      prevState.rollCount =  103;
      prevState.diceHold =  [false, false, false, false, false]; 
      prevState.diceValue =  [0, 0, 0, 0, 0];
      if (prevState.firstYahtzee && !prevState.savedYahtzee) {
        prevState.savedYahtzee = true;
      }
      return prevState;
    })
  }

  // The rules for bonus Yahtzee

  // 1. If there is no saved 50 score for yahtzee, then no bonus will be applied
  // 2. If there is a saved 50 yahtzee, a bonus of 100 pts is applied
  // 3. You must also fill a score on the board

  // 4. If the corresponding number in the Upper section has not been filled, player must fill it
  // 5. If the corresponding number has been filled, player may choose from any of the lower section to fill
  // 6. Point values for 3ofkind 4ofkind and Chance are the total value of the dice
  // 7. Sm. Straight, Lg. Straight, and Full house get 30, 40, 25 respectively
  // 8. If all lower section values are filled, player must fill in 0 for upper section value that is not filled

  bonusYahtzeeScoring = (value, name, scoringSystem, place, saved) => {
    // If bonus gets here, the value that is the YZ is already saved
    // Will not need to check it
    // console.log(value, name, scoringSystem, place, saved)
    console.log("This is inside of bonusYahtzeeScoring")
    const dice = this.state.diceValue;
    const totalSum = dice.reduce((amt, tot) => amt + tot)
    const scoring = this.state.scoring;
    let saveNum = 0;
    if (saved) {
      console.log("Already a value there bonusYZ");
      return;
    }
    console.log(scoringSystem)
    switch (scoringSystem) {
      case "number":
        saveNum = 0;
        break;
      case "kind":
        saveNum = totalSum;
        break;
      case "fullHouse":
        saveNum = 25
        break;
      case "straight":
        saveNum = value;
        break;
      case "total":
        saveNum = totalSum;
        break;
      case "bonusYahtzee":
        console.log("You can't click this more than once a round")
        break;
      default:
        console.log("scoringSystem switch in bonusYZ not working as expected");
    }
    this.setState((prevState => {
      if (value !== "bonusYahtzee") {
        prevState.previousPlace = place;
        prevState.scoring[place].score = saveNum;
      }
      return prevState;
    }))
  }


  render() {

    return (
      <div className="container">
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
        {this.state.showSave ? <button onClick={this.saveScore}>Save</button>: null}
        <div className="scoringGrid">
          {this.state.scoring.map(score =>
            <div key={score.name} className={score.name === "total" ? "totalScore" : "score"}>
              <p>{score.name}</p>
              {score.click ?
                <button
                  onClick={this.state.bonusYahtzee ? () => this.bonusYahtzeeScoring(score.value, score.name, score.scoreSystem, score.place, score.saved) : () => this.testScore(score.value, score.name, score.scoreSystem, score.place, score.saved)}
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