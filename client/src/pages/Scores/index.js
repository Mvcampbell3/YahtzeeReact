import React, { Component } from 'react';
// import "./scores.css";

import dice1 from "../../images/1.jpg"
import dice2 from "../../images/2.jpg"
import dice3 from "../../images/3.jpg"
import dice4 from "../../images/4.jpg"
import dice5 from "../../images/5.jpg"
import dice6 from "../../images/6.jpg"
import blank from "../../images/Blankdie.jpg"

class Scores extends Component {
  state = {
    animate: false,
    classes: [
      "dice show-blank",
      "dice show-front",
      "dice show-back",
      "dice show-top",
      "dice show-bottom",
      "dice show-left",
      "dice show-right"
    ],

    blank: blank,
  }

  animateTrue = () => {
    this.setState({ animate: true })
  }

  animateFalse = () => {
    this.setState({ animate: false })
  }

  pickClass = () => {

  }

  testReset = () => {
    console.log("----------------------")
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const dice3 = document.getElementById("dice3");
    const dice4 = document.getElementById("dice4");
    const dice5 = document.getElementById("dice5");
    const diceArray = [dice1, dice2, dice3, dice4, dice5]

    diceArray.forEach(die => {
      const num = Math.floor((Math.random() * 6) + 1);
      die.className = this.state.classes[num]
      console.log(num)
    })
  }

  // On the right track, need to figure out the index portion of this roll function

  render() {
    return (
      <div>
        <div className="dice__holder">
          <div className="scene">
            <div className="dice" id="dice1">
              <div className="dice__face dice__front">
                <img src={dice1} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__back">
                <img src={dice2} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__top">
                <img src={dice3} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__bottom">
                <img src={dice4} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__left">
                <img src={dice5} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__right">
                <img src={dice6} alt="dice" className="dice__img" />
              </div>
            </div>
          </div>

          <div className="scene">
            <div className="dice" id="dice2">
              <div className="dice__face dice__front">
                <img src={dice1} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__back">
                <img src={dice2} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__top">
                <img src={dice3} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__bottom">
                <img src={dice4} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__left">
                <img src={dice5} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__right">
                <img src={dice6} alt="dice" className="dice__img" />
              </div>
            </div>
          </div>

          <div className="scene">
            <div className="dice" id="dice3">
              <div className="dice__face dice__front">
                <img src={dice1} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__back">
                <img src={dice2} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__top">
                <img src={dice3} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__bottom">
                <img src={dice4} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__left">
                <img src={dice5} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__right">
                <img src={dice6} alt="dice" className="dice__img" />
              </div>
            </div>
          </div>

          <div className="scene">
            <div className="dice" id="dice4">
              <div className="dice__face dice__front">
                <img src={dice1} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__back">
                <img src={dice2} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__top">
                <img src={dice3} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__bottom">
                <img src={dice4} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__left">
                <img src={dice5} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__right">
                <img src={dice6} alt="dice" className="dice__img" />
              </div>
            </div>
          </div>

          <div className="scene">
            <div className="dice" id="dice5">
              <div className="dice__face dice__front">
                <img src={dice1} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__back">
                <img src={dice2} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__top">
                <img src={dice3} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__bottom">
                <img src={dice4} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__left">
                <img src={dice5} alt="dice" className="dice__img" />
              </div>
              <div className="dice__face dice__right">
                <img src={dice6} alt="dice" className="dice__img" />
              </div>
            </div>
          </div>

        </div>
        <button onClick={this.testReset}>Click</button>
      </div>
    );
  }
}
export default Scores;