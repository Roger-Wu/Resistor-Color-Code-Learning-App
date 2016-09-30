import React, { Component, PropTypes } from 'react';

import ColorGame from "./ColorGame.jsx"

export default class ColorGamePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ColorGame />
      </div>
    );
  }
}
