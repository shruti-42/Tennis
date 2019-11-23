import React, { Component } from "react";
import ScoreBoard from "../scoreBoard/scoreBoard";
import Player from "../player/player";

export default class Game extends Component {
  render() {
    return (
      <div className="tennisBackground">
        <h2 className="tennisHeading">Play Tennis</h2>
        <ScoreBoard />
        <div className="playerBox">
          <Player playerName="Player 1" playerNumber={1} />
          <Player playerName="Player 2" playerNumber={2} />
        </div>
      </div>
    );
  }
}
