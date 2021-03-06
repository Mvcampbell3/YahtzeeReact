import React from 'react';
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header style={{backgroundColor: props.color}}>
      <h1>Yahtzee</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/game'>Game</Link>
          </li>
          <li>
            <Link to='/scores'>Scores</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;