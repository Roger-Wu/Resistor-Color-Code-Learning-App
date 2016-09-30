import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GamePage extends Component {
  render() {
    return (
      <div id="game-page">
        <div>Game Page</div>
        <Link to="/game/color">color game</Link>
        <Link to="/game/resistor">resistor game</Link>
      </div>
    );
  }
}
