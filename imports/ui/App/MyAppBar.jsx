import React, { Component } from 'react';
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
    console.log(props);

    this.state = {
      open: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const routes = [
      {name: "Home", path: "/"},
      {name: "Learn", path: "/learn"},
      {name: "Train", path: "/train"},
    ];
    //
    // const tabs = (
    //   <Tabs style={styles.tabs} value={this.props.location.pathname}>
    //     <Tab label="Home" value="/" containerElement={<Link to="/"/>}></Tab>
    //     <Tab label="Learn" value="/learn" containerElement={<Link to="/learn"/>}></Tab>
    //     <Tab label="Train" value="/train" containerElement={<Link to="/train"/>}></Tab>
    //   </Tabs>
    // );
    // const buttons = (
    //   <div>
    //     <FlatButton
    //       label="Learn"
    //       containerElement={<Link to="/learn"/>}
    //     />
    //     <FlatButton label="Train" containerElement={<Link to="/train"/>} />
    //   </div>
    // );

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
          { routes.map((route) => {
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
