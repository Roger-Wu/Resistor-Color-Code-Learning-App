import React, { Component } from 'react';
import ColorProblem from "./ColorProblem.jsx"

export default class ColorGame extends Component {
  constructor(props) {
    super(props);
  }

  getProblem() {
    return {
      _id: 1,
      question: {
        code: 5,
        statement: "請選出顏色所對應的數字"
      },
      options: [4, 5, 6, 7],
      answerIdx: 1,
    };
  }

  render() {
    return (
      <div>
        <ColorProblem problem={this.getProblem()}/>
      </div>
    );
  }
}
