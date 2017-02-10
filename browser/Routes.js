import React from 'react';
import NewsFeed from './NewsFeed';
import Story from './Story';
import Main from './Main';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { logOnEnter, logOnLeave, } from './utils';
import Logger from './Logger';

// helper function - just because we're playing around doesn't mean we shouldn't be DRY!
const routeLog = (path, direction) => {
  if (direction === 'Leave') console.log('--------------------------------------');
  console.log(`Route ${path} on${direction}`);
};

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route
            path="/"
            component={Main}
            onEnter={() => logOnEnter('/')}
            onLeave={() => logOnLeave('/')}>
            <Route
              path="news"
              component={NewsFeed}
              onEnter={() => logOnEnter('/news')}
              onLeave={() => logOnLeave('/news')}/>
            <Route
              path="news/:storyId"
              component={Story}
              onEnter={() => logOnEnter('/news/:storyId')}
              onLeave={() => logOnLeave('/news/:storyId')}/>
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
