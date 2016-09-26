import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        {[
          <div key="1">1</div>,
          <div key="2">2</div>,
          <div key="3">3</div>
        ]}
      </div>
    );
  }
}
