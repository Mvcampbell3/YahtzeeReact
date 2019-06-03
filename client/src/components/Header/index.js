import React from 'react';
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <h1>Yahtzee</h1>
      <div className="headerLinks">
        <Link to="/">Home</Link>
        <Link to="/score">Scores</Link>
      </div>
    </header>
  );
}

export default Header;