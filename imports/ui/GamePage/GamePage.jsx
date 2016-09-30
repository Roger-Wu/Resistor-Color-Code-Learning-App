import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

export default class GamePage extends Component {
  render() {
    const buttonStyle = {
      display: "block",
      width: "240",
      margin: "40px auto",
    };

    return (
      <div id="game-page">
        <div>Game Page</div>
        <RaisedButton
          label="Play Color Game"
          secondary={true}
          containerElement={<Link to="/game/color"/>}
          style={buttonStyle}
        />
        <RaisedButton
          label="Play Resistor Game"
          secondary={true}
          containerElement={<Link to="/game/resistor"/>}
          style={buttonStyle}
        />
      </div>
    );
  }
}
