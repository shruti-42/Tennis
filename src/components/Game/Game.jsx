import React, { Component } from "react";
import ScoreBoard from "../scoreBoard/scoreBoard";

export default class Game extends Component {
  render() {
    return (
      <div className="tennisBackground">
        <h2 className="tennisHeading">Play Tennis</h2>
        <ScoreBoard/>
      </div>
    );
  }
}
