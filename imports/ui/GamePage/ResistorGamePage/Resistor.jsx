import React, { Component, PropTypes } from 'react';

export default class Resistor extends Component {
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
    const { codes } = this.props;

    const height = 64;

    const style = {
      container: {
        position: "relative",
        width: height*5,
        height: height,
        margin: "0 auto",
        textAlign: "center",
      },
      body: {
        borderRadius: height/8,
      },
    }

    return (
      <div style={style.container}>
        <div className="resistor-wire" style={style.wire} />
        <div className="resistor-body" style={style.body}>
          {
            this.props.codes.map((code, index) => {
              return (
                <div
                  key={index}
                  className={"resistor-background-" + this.codeToColor(code)}
                  style={{
                    margin: "0 " + height/8 + "px",
                    height: height,
                    width: height/4,
                    display: "inline-block",
                  }}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

Resistor.propTypes = {
  codes: PropTypes.array.isRequired,
};
