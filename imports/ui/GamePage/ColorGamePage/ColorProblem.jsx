import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

// handle one problem
export default class ColorProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeToColorDict: {
        0: "black",
        1: "brown",
        2: "red",
        3: "orange",
        4: "yellow",
        5: "green",
        6: "blue",
        7: "violet",
        8: "gray",
        9: "white",
        10: "gold",
        11: "silver",
      }
    };
  }

  codeToColor(code) {
    return this.state.codeToColorDict[code];
  }

  render() {
    const { problem } = this.props;

    const style = {
      container: {
        maxWidth: 400,
        margin: "0 auto",
        padding: 12,
      },
      option: {
        display: "block",
        margin: "12px auto 0",
        width: 240,
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
        <div>Q1</div>
        <div>Score: 1</div>
        <div style={{padding: 20}}>
          <div
            className={"resistor-ring-" + this.codeToColor(problem.question.code)}
            style={{width: 100, height: 100, margin:"0 auto"}}
          />
        </div>
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
