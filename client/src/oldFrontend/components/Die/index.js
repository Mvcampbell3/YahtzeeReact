import React from 'react';
import "./die.css"

import dice1 from "../../../images/1.jpg"
import dice2 from "../../../images/2.jpg"
import dice3 from "../../../images/3.jpg"
import dice4 from "../../../images/4.jpg"
import dice5 from "../../../images/5.jpg"
import dice6 from "../../../images/6.jpg"
import blank from "../../../images/Blankdie.jpg"

const Die = (props) => {
  return (
    <div>
      <div className="scene">
        <div className={props.class}>
          <div className="dice__face dice__front">
            <img src={props.class === "dice show-blank" ? blank : dice1} alt="dice" className="dice__img" />
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
  );
}

export default Die;