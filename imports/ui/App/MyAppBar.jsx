import React, { Component } from 'react';
import { Link } from 'react-router';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class MyAppBar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
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
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">Content</div>
        </main>
      </div>
    );
  }
}
