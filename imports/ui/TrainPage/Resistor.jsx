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
        8: "grey",
        9: "white",
        10: "linear-gradient(to bottom, #d39400 0%,#ffff30 30%,#d39400 100%)",
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
        width: height*4,
        height: height,
        fontSize: height,
        margin: "0 auto",
        textAlign: "center",
      },
      body: {
        position: "absolute",
        left: height/2,
        width: height*3,
        height: height,
        // margin: "0 auto",
        zIndex: 2,
        borderRadius: height/8,
        backgroundColor: "#f3d297",
        textAlign: "center",
      },
      wire: {
        position: "absolute",
        left: 0,
        top: height*7/16,
        width: height*4,
        height: height/8,
        zIndex: 1,
        background: "linear-gradient(to bottom,  #919191 0%,#dbdbdb 30%,#8e8e8e 100%)",
      },
      ring: {

      }
    }

    return (
      <div style={style.container}>
        <div style={style.wire} />
        <div style={style.body}>
          {
            this.props.codes.map((code, index) => {
              return (
                <div key={index} style={{
                    background: this.codeToColor(code),
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
