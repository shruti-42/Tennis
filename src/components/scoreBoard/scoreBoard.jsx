import React from "react";
import PropTypes from "prop-types";

const constants = {
  SCOREBOARD: "scoreBoard",
  PLAYER_1: "Player1: ",
  PLAYER_2: "Player2: "
};

const Score = ({ firstPlayer = 0, secondPlayer = 0 }) => (
  <div className="scoreBoard">
    <h3>{constants.SCOREBOARD}</h3>
    <div className="playerStyles">
      {constants.PLAYER_1}<div className="scoreStyles">{firstPlayer}</div>
    </div>
    <div className="playerStyles">
      {constants.PLAYER_2}<div className="scoreStyles">{secondPlayer}</div>
    </div>
  </div>
);

Score.propTypes = {
  firstPlayer: PropTypes.number,
  secondPlayer: PropTypes.number
};

export default Score;
