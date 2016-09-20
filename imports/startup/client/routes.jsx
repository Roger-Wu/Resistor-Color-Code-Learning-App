import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import App from '../../ui/App/App.jsx';
import HomePage from '../../ui/HomePage/HomePage.jsx';
import LearnPage from '../../ui/LearnPage/LearnPage.jsx';
import TrainPage from '../../ui/TrainPage/TrainPage.jsx';
import NotFoundPage from '../../ui/NotFoundPage/NotFoundPage.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="learn" component={LearnPage}/>
      <Route path="train" component={TrainPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
