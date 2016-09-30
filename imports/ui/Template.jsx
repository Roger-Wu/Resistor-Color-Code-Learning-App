import React, { Component, PropTypes } from 'react';

export default class Template extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  myFunc = () => {

  }

  render() {
    return (
      <div></div>
    );
  }
}
