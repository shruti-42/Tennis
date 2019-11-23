import React, { Component } from "react";

export default class Player extends Component {
    constructor(props){
        super(props)
    }
    updateScore = (score) => {
        this.props.updateScore(score);
    };
    render() {
        var { playerName, playerNumber } = this.props;
        return (
        <div>
            <div className="playerHeading">{ playerName }</div>
            <div className="player" value = { playerNumber } defaultValue = { playerNumber  } onClick={(e) => this.updateScore(playerNumber, playerName)}></div>
        </div>
        );
    }
}
