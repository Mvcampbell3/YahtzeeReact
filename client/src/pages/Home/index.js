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
    dicePics: [dice1, dice2, dice3, dice4, dice5, dice6, blank],
    diceValue: [6, 6, 6, 6, 6],
    diceHold: [false, false, false, false, false],
    rollCount: 3
  }

  switchShow = e => {
    this.setState({ showDie: !this.state.showDie })
  }

  rollDice = () => {
    if (this.state.rollCount > 0) {

      const dice = this.state.diceValue;
      const holds = this.state.diceHold;
      const newDice = []
      for (let i = 0; i < dice.length; i++) {
        if (holds[i] !== true) {
          const rdmNum = Math.floor((Math.random() * 6) + 0);
          console.log(rdmNum);
          newDice.push(rdmNum);
        } else {
          newDice.push(dice[i])
        }
      }
      console.log(newDice);
      this.setState({ diceValue: newDice, rollCount: this.state.rollCount - 1 })
    }
  }

  holdButtonHandle = e => {
    console.log(e.target.value);
    const whichHold = e.target.value;
    const holds = this.state.diceHold;
    holds[whichHold] = !holds[whichHold];;
    console.log(holds)
    this.setState({diceHold:holds})
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
          <button value={0} className={this.state.diceHold[0] ? "unhold": "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[0] ? "Unhold": "Hold"}</button>
          <button value={1} className={this.state.diceHold[1] ? "unhold": "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[1] ? "Unhold": "Hold"}</button>
          <button value={2} className={this.state.diceHold[2] ? "unhold": "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[2] ? "Unhold": "Hold"}</button>
          <button value={3} className={this.state.diceHold[3] ? "unhold": "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[3] ? "Unhold": "Hold"}</button>
          <button value={4} className={this.state.diceHold[4] ? "unhold": "hold"} onClick={e => this.holdButtonHandle(e)}>{this.state.diceHold[4] ? "Unhold": "Hold"}</button>
        </div>
        <button onClick={this.rollDice}>Roll</button>
      </div>
    );
  }
}

export default Home;