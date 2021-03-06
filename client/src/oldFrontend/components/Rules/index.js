import React from 'react';
import "./rules.css"

const Rules = (props) => {
  return (
    <div id="rulesArea" className="rulesArea">
      <h2 className="center">Rules of Yahtzee</h2>
      <h3>Playing the Game</h3>
      <p>
        The game of Yahtzee consists of 13 rounds of rolling dice. Each round allows three dice rolls.
        The objective of the game is to score the most points you can. After each round you must enter a score for an empty value on the scoresheet. You can press the Hold Button below each die to stop that die from rolling. You can Unhold dice at anytime.
        This game will automatically add up the points you scored for each prospective spot on the scoresheet when you press the square next to the score you want. After you have selected the score you want, you must press the save button to move on to the next round. Since you must enter a score each round, you can save a 0 if you did not fullfill the requirements for any score. Here is a list of the scoring options:
      </p>
      <div className="scoringListRules">

        <label>Upper (Left Side) Scoring</label>
        <ul className="scoringList Upper">

          <li>
            <h5>Upper Section</h5>
            <p>The upper section of scoring tracks the number of dice that have that value. i.e. If you have 4 threes, the threes section will score 12 points</p>
          </li>
          <li>
            <h5>Bonus</h5>
            <p>If the sum of the upper section of scoring is 63 points or higher, you will recieve a 35 point bonus</p>
          </li>
        </ul>

        <label>Lower (Right Side) Scoring</label>
        <ul className="scoringList Lower">
          <li>
            <h5>Three of a Kind</h5>
            <p>If you have Three of any same number in you dice, you can score the total amount of points that all of the dice are worth</p>
          </li>
          <li>
            <h5>Four of a Kind</h5>
            <p>If you have Four of any same number in you dice, you can score the total amount of points that all of the dice are worth</p>
          </li>
          <li>
            <h5>Full House</h5>
            <p>If you have Three of any one number and Two of any other number, you score 25 points</p>
          </li>
          <li>
            <h5>Small Straight</h5>
            <p>If you have Four numbers in sequence, i.e. 1 2 3 4, you score 30 points</p>
          </li>
          <li>
            <h5>Large Straight</h5>
            <p>If you have Five numbers in sequence, i.e. 1 2 3 4 5, you score 40 points</p>
          </li>
          <li>
            <h5>Yahtzee</h5>
            <p>If you have Five numbers that are all the same, i.e. 4 4 4 4 4, you score 50 points</p>
          </li>
          <li>
            <h5>Chance</h5>
            <p>This will score the total of all of the dice</p>
          </li>
          <li>
            <h5>Bonus Yahtzee</h5>
            <p>If you score another Yahtzee, and you saved the first one in the Yahtzee spot, you recieve a bonus 100 points. You must also fill in another spot on the scoresheet. If the corresponding upper section number has an empty score, it will automatically fill it and save the points for the round. If the number is already filled, you can select any of the open lower section scores that are empty and get their full value. If all of those are filled, you must place a zero in an empty number spot in the upper section.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;