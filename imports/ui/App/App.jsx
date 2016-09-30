import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MyAppBar from './MyAppBar.jsx';

export default class App extends Component {
  // TODO: delete debug code
  // constructor(props) {
  //   super(props);
  //   console.log('App');
  //   console.log(props);
  // }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app-container">
          <MyAppBar navbarItems={this.props.route.navbarItems} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};
