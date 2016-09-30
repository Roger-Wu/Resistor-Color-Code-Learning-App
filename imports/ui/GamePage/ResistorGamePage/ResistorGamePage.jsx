import React, { Component, PropTypes } from 'react';

import ResistorGame from "./ResistorGame.jsx"

export default class ResistorGamePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ResistorGame />
      </div>
    );
  }
}
