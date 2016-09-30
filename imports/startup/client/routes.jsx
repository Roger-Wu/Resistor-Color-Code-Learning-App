import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import App from '../../ui/App/App.jsx';
import HomePage from '../../ui/HomePage/HomePage.jsx';
import LearnPage from '../../ui/LearnPage/LearnPage.jsx';
import GamePage from '../../ui/GamePage/GamePage.jsx';
import ColorGamePage from '../../ui/GamePage/ColorGamePage/ColorGamePage.jsx';
import ResistorGamePage from '../../ui/GamePage/ResistorGamePage/ResistorGamePage.jsx';
import NotFoundPage from '../../ui/NotFoundPage/NotFoundPage.jsx';

export const renderRoutes = () => {
  const navbarItems = [
    {name: "Home", path: "/"},
    {name: "Learn", path: "/learn"},
    {name: "Game", path: "/game"},
  ];

  return (
    <Router history={browserHistory}>
      <Route path="/" navbarItems={navbarItems} component={App}>
        <IndexRoute component={HomePage} />
        <Route path="learn" component={LearnPage} />
        <Route path="game" component={GamePage} />
        <Route path="/game/resistor" component={ResistorGamePage} />
        <Route path="/game/color" component={ColorGamePage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  );
}
