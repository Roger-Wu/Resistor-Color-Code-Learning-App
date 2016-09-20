import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { AppBar, Tabs, Tab, FlatButton } from 'material-ui';

export default class MyAppBar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const tabs = (
      <Tabs style={{width: 300}} value={this.props.location.pathname}>
        <Tab label="Home" value="/" containerElement={<Link to="/"/>}></Tab>
        <Tab label="Learn" value="/learn" containerElement={<Link to="/learn"/>}></Tab>
        <Tab label="Train" value="/train" containerElement={<Link to="/train"/>}></Tab>
      </Tabs>
    );
    // const buttons = (
    //   <div>
    //     <FlatButton
    //       label="Learn"
    //       containerElement={<Link to="/learn"/>}
    //     />
    //     <FlatButton label="Train" containerElement={<Link to="/train"/>} />
    //   </div>
    // )
    return (
      <AppBar
        title={tabs}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
      </AppBar>
    );
  }
}
