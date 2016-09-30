import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class MyAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <AppBar
          title="Resistor Master"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        >
          <AccountsUIWrapper />
        </AppBar>

        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          { this.props.navbarItems.map((route) => {
            return (
              <MenuItem
                key={route.path}
                primaryText={route.name}
                onTouchTap={this.handleClose}
                containerElement={<Link to={route.path} />}
              />
            )
          })}
        </Drawer>
      </div>
    );
  }
}

MyAppBar.propTypes = {
  navbarItems: PropTypes.array.isRequired,
};
