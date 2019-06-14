import React from 'react';
import "./homepage.css"
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className="homePage">
      <img className="landingImage"
        src="https://images.pexels.com/photos/33968/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="dice"
      />
      <div className="mainCards">
        <Link to="/login" className="card">
          <div className="cardContent">
            <div className="cardFront">
              <h3 className="cardTitle">Login</h3>
              <p className="cardInfo">Save your High Scores</p>
            </div>
            <div className="cardBack">
              <h3 className="cardTitle">Back of the card</h3>
              <p className="cardInfo">This is the back of the card</p>
            </div>
          </div>
        </Link>
        <Link to="/game" className="card">
          <div className="cardContent">
            <div className="cardFront" id="game">
              <h3 className="cardTitle">Play the Game</h3>
              <p className="cardInfo">Are you ready to play?</p>
            </div>
            <div className="cardBack" id="gameBack">
              <h3 className="cardTitle">Back of the card</h3>
              <p className="cardInfo">This is the back of the card</p>
            </div>
          </div>
        </Link>
        <Link to="/scores" className="card">
          <div className="cardContent">
            <div className="cardFront" id="scores">
              <h3 className="cardTitle">High Scores</h3>
              <p className="cardInfo">View the High Scores List</p>
            </div>
            <div className="cardBack" id="scoresBack">
              <h3 className="cardTitle">Back of the card</h3>
              <p className="cardInfo">This is the back of the card</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;