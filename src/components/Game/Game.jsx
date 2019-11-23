import React, { Component } from "react";
import ScoreBoard from "../scoreBoard/scoreBoard";
import Player from "../player/player";

const Tennis = {
  DEUCE: "Deuce!",
  WON: "Won!",
  PLAYER: "Player",
  
};

const points = [0, 15, 30, 40, "won"];
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayerPointIndex: 0,
      secondPlayerPointIndex: 0,
      gamePoint: false,
      firstPlayerAdvantage: false,
      secondPlayerAdvantage: false,
      won: 0,
      deuce: false
    };
  }

 

updateScorePlayer = player => {
    var {
      deuce,
      gamePoint,
      firstPlayerAdvantage,
      secondPlayerAdvantage,
      firstPlayerPointIndex,
      secondPlayerPointIndex,
      won
    } = this.state;

    const {
      playerPointIndex,
      opponentPlayerPointIndex,
      playerAdvantage,
      opponentPlayerAdvantage
    } =
      player === 1
        ? {
            playerPointIndex: firstPlayerPointIndex + 1,
            opponentPlayerPointIndex: secondPlayerPointIndex,
            playerAdvantage: firstPlayerAdvantage,
            opponentPlayerAdvantage: secondPlayerAdvantage
          }
        : {
            playerPointIndex: secondPlayerPointIndex + 1,
            opponentPlayerPointIndex: firstPlayerPointIndex,
            playerAdvantage: secondPlayerAdvantage,
            opponentPlayerAdvantage: firstPlayerAdvantage
          };

    //player update score logic
    if (!won) {
      if (gamePoint && !opponentPlayerAdvantage) {
        this.setState({ won: player });
      }
      if (deuce) {
        if (playerAdvantage) {
          this.setState({ gamePoint: true });
        } else {
          this.setState({
            secondPlayerAdvantage: player !== 1,
            firstPlayerAdvantage: player === 1
          });
        }
      } else {
        const pointIndex =
          player === 1
            ? {
                firstPlayerPointIndex: playerPointIndex
              }
            : {
                secondPlayerPointIndex: playerPointIndex
              };

        if (points[playerPointIndex] === "won") {
          this.setState({ won: player });
        } else if (
          points[playerPointIndex] === 40 &&
          points[opponentPlayerPointIndex] === 40
        ) {
          this.setState({
            deuce: true,
            ...pointIndex
          });
        } else {
          this.setState({ ...pointIndex });
        }
      }
      if (opponentPlayerAdvantage) {
        this.setState({
          deuce: true,
          firstPlayerPointIndex: 3,
          secondPlayerPointIndex: 3,
          firstPlayerAdvantage: false,
          secondPlayerAdvantage: false
        });
      }
    }
  };

  render() {
    const {
      firstPlayerPointIndex,
      secondPlayerPointIndex,
      won,
      deuce,
      secondPlayerAdvantage,
      firstPlayerAdvantage
    } = this.state;

    return (
      <div className="tennisBackground">
        <h2 className="tennisHeading">Play Tennis</h2>
        <div>
          
          <ScoreBoard
            firstPlayer={points[firstPlayerPointIndex]}
            secondPlayer={points[secondPlayerPointIndex]}
          />
        </div>
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
       
        {won && <h1>PLAYER {won} WON !!!</h1>}
      </div>
    );
  }
}
