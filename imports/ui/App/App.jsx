import React, { Component } from 'react';

import MyAppBar from './MyAppBar.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <MyAppBar location={this.props.location} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};
