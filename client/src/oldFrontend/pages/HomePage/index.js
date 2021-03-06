import React from 'react';
import "./homepage.css"
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <>
      {props.loadedUser ? <div className='home-container'>
        <div className="banner">
          <h1>Yahtzee</h1>
        </div>
        <div className="link-group">
          <div className="link-holder game-link">
            <Link to='/game'>Game</Link>
          </div>
          <div className="link-holder score-link">
            <Link to='/scores'>Scores</Link>
          </div>
          <div className="link-holder home-link">
            {props.user ? <Link to='userpage'>{props.username}</Link> : <Link to='/login'>Login</Link>}
          </div>
        </div>
        {props.user ? <div className='logout-link'>
          <button className="logoutBtn" onClick={props.logoutUser}>Want to Logout?</button>
        </div> : <></>}
      </div> : <> </>}

    </>
  );
}

export default HomePage;