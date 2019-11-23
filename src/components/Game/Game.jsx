import React, { Component } from "react";
import ScoreBoard from "../scoreBoard/scoreBoard";
import Player from "../player/player";

const points = [0, 15, 30, 40, "won"];

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayerPointIndex: 0,
      secondPlayerPointIndex: 0
    };
  }
  updateScorePlayer = player => {
    var { firstPlayerPointIndex, secondPlayerPointIndex } = this.state;

    const { playerPointIndex, opponentPlayerPointIndex } =
      player === 1
        ? {
            playerPointIndex: firstPlayerPointIndex + 1,
            opponentPlayerPointIndex: secondPlayerPointIndex
          }
        : {
            playerPointIndex: secondPlayerPointIndex + 1,
            opponentPlayerPointIndex: firstPlayerPointIndex
          };
          
  };
  render() {
    const {
        firstPlayerPointIndex,
        secondPlayerPointIndex
       
      } = this.state;
    return (
      <div className="tennisBackground">
        <h2 className="tennisHeading">Play Tennis</h2>
        <ScoreBoard
          firstPlayer={points[firstPlayerPointIndex]}
          secondPlayer={points[secondPlayerPointIndex]}
        />
        <div className="playerBox">
          <Player
            playerName="Player 1"
            playerNumber={1}
            updateScore={this.updateScorePlayer.bind(this)}
          />
          <Player
            playerName="Player 2"
            playerNumber={2}
            updateScore={this.updateScorePlayer.bind(this)}
          />
        </div>
      </div>
    );
  }
}
