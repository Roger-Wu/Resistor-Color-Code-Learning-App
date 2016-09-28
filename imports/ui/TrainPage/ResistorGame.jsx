import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import Resistor from './Resistor.jsx';

export default class ResistorGame extends Component {
  constructor(props) {
    super(props);
  }

  getProblem() {
    return {
      _id: 1,
      statement: [2, 2, 3, 10],
      options: ["10k", "22k", "81k", "87k"],
      answerIdx: 1,
    };
  }

  render() {
    return (
      <div>
        <ResistorProblem problem={this.getProblem()}/>
      </div>
    );
  }
}

class ResistorProblem extends Component {
  render() {
    const { problem } = this.props;

    const style = {
      container: {
        maxWidth: 600,
        margin: "0 auto",
        padding: 12,
      },
      option: {
        display: "block",
        margin: "12px auto 0",
        width: 300,
        height: 56,
      },
      optionText: {
        fontSize: 24,
      }
    }

    return (
      <Paper
        key={problem._id}
        style={style.container}
        zDepth={1}
      >
        <Resistor codes={problem.statement} />
        {
          problem.options.map((option, index) => {
            return (
              <RaisedButton
                key={option}
                label={option}
                labelStyle={style.optionText}
                secondary={true}
                style={style.option}
              />
            );
          })
        }
      </Paper>
    );
  }
}
