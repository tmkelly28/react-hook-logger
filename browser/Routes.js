import React from 'react';
import NewsFeed from './NewsFeed';
import Story from './Story';
import Main from './Main';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { logOnEnter, logOnLeave, } from './utils';
import Logger from './Logger';

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route
            path="/"
            component={Main}
            onEnter={() => logOnEnter('Route /')}
            onLeave={() => logOnLeave('Route /')}>
            <Route
              path="news"
              component={NewsFeed}
              onEnter={() => logOnEnter('Route /news')}
              onLeave={() => logOnLeave('Route /news')}/>
            <Route
              path="news/:storyId"
              component={Story}
              onEnter={() => logOnEnter('Route /news/:storyId')}
              onLeave={() => logOnLeave('Route /news/:storyId')}/>
            <IndexRoute
              component={NewsFeed}
              onEnter={() => logOnEnter('IndexRoute')}
              onLeave={() => logOnLeave('IndexRoute')}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default Logger(Routes, 'Routes');
