import React from 'react';
import Dice from "./Dice";
const GamePage = (props) => {
	console.log(props)
	return (
		<div className="container">
			{/* Some Game Options */}
			<h2>Would you like to play a game?</h2>
			<div className="game-action-holder">
				<button>New Game</button>
				{/* Start Game / New */}
			</div>
			{/* Dice Box */}
			<div className="dice-holder">
				<Dice />
			</div>
			{/* Dice Hold Buttons */}
			<div className="dice-hold-holder">
				<div className="dice-hold"></div>
				<div className="dice-hold"></div>
				<div className="dice-hold"></div>
				<div className="dice-hold"></div>
				<div className="dice-hold"></div>
			</div>

			<div className="dice-action-holder">
				<button>roll</button>
				<button>save</button>
			</div>

			{/* Roll Save-Score */}

			{/* Score Board */}
		</div>
	);
}

export default GamePage;