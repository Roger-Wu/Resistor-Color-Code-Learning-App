import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default class ResistorGame extends Component {
  constructor(props) {
    super(props);
  }

  getProblem() {
    return {
      _id: 1,
      statement: "problem description 1",
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

    const containerStyle = {
      maxWidth: 600,
      margin: "0 auto",
      padding: 12,
    };
    const statementStyle = {
      fontSize: "2rem",
    };
    const optionStyle = {
      display: "block",
      margin: "12px auto 0",
      width: 300,
      height: 56,
      // lineHeight: "2rem",
      // fontSize: "2rem",
    };
    const optionTextStyle = {
      // lineHeight: "2rem",
      fontSize: 24,
      // height: "2rem",
    }

    return (
      <Paper
        key={problem._id}
        style={containerStyle}
        zDepth={1}
      >
        <div>{problem.statement}</div>
        {
          problem.options.map((option, index) => {
            return (
              <RaisedButton
                key={option}
                label={option}
                labelStyle={optionTextStyle}
                secondary={true}
                style={optionStyle}
              />
            );
          })
        }
      </Paper>
    );
  }
}
