import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from '../Player/Player';
import ScoreBoard from "../scoreBoard/scoreBoard";


configure({ adapter: new Adapter() });

describe("Game", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("handle the win scenario", () => {
    const updateScore = jest.fn();
    const points = [0, 15, 30, 40, "won"];
    const button = shallow(<Player updateScore={updateScore} />);
    var score = shallow(<ScoreBoard />);
    var status = 0;
    points.map((data, id) => {
      if (id > 0) {
        button
          .find(".player")
          .props()
          .onClick();
        status = points[id];
      }
    });
    status = status == "won" ? 1 : 0;
    expect(updateScore).toHaveBeenCalledTimes(4);
    score.setProps({ firstPlayer: status });
    expect(score.props().children[1].props.children[1].props.children).toEqual(
      1
    );
  });

  it("handle the deuce scenario", () => {
    const updateScore = jest.fn();
    const points = [0, 15, 30, 40, "won"];
    var player1Points = 40,
      player2Points = 40;

    var score = shallow(<ScoreBoard />);
    const button = shallow(<Player updateScore={updateScore} />);
    score.setProps({ firstPlayer: player1Points, secondPlayer: player2Points });

    button
      .find(".player")
      .props()
      .onClick();
    expect(updateScore).toHaveBeenCalledTimes(1);
    score.setProps({ firstPlayer: 11, secondPlayer: player2Points });
  });

});
