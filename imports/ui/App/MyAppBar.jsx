import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-toolbox/lib/button/Button.js';
import { Card } from 'react-toolbox/lib/card';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class MyAppBar extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  render() {

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
    // )
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Link to="/">Home</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/train">Train</Link>
        <Button label="Hello World!" />
        <Button className="a">123</Button>
        <Card>123</Card>
      </div>
    );
  }
}
