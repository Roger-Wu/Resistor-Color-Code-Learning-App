import React, { Component } from 'react';

export default class Template extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.myFunc = this.myFunc.bind(this);
  }

  myFunc() {

  }

  render() {
    return (
      <div></div>
    );
  }
}
