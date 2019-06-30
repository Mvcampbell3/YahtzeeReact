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
        <Link to={props.user ? "/userpage": "/login"} className="card">
          <div className="cardContent">
            <div className="cardFront" id="loginFront">
              {props.user? <h2 className="cardTitle">Welcome</h2>:null}
              <h3 className="cardTitle">{props.user ? props.username : "Login"}</h3>
              <p className="cardInfo">{props.user ? null : "Save Your Scores"}</p>
            </div>
            <div className="cardBack" id="loginBack">
              <h3 className="cardTitle">{props.user ? "See Your Scores": "Need to Sign Up?"}</h3>
              <p className="cardInfo">{props.user ? null:"You can do that too!"}</p>
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
              <h3 className="cardTitle">Yahtzee</h3>
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
              <h3 className="cardTitle">Top Scores</h3>
              <p className="cardInfo">From all users</p>
            </div>
          </div>
        </Link>
      </div>
      {props.user ? <button className="switchBtn homeSwitch" onClick={props.logoutUser}>Logout</button> : null}
    </div>
  );
}

export default HomePage;