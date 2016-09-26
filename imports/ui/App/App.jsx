import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import Test from './Test.jsx';
import MyAppBar from './MyAppBar.jsx';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    console.log('App');
    console.log(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app-container">
          <MyAppBar location={this.props.location} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.object,
};
