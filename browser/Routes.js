import React from 'react';
import NewsFeed from './NewsFeed';
import Story from './Story';
import Main from './Main';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { diff } from './utils';

// helper function - just because we're playing around doesn't mean we shouldn't be DRY!
const routeLog = (path, direction) => {
  if (direction === 'Leave') console.log('--------------------------------------');
  console.log(`Route ${path} on${direction}`);
};

class Routes extends React.Component {

  componentWillMount () {
    console.log('Routes: componentWillMount');
  }

  componentDidMount () {
    console.log('Routes: componentDidMount');
  }

  componentWillReceiveProps (nextProps) {
    console.log('Routes: componentWillReceiveProps', "Here's what changed: ", diff(this.props, nextProps));
  }

  componentWillUnmount () {
    console.log('Routes: componentWillUnmount');
  }

  render () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route
            path="/"
            component={Main}
            onEnter={() => routeLog('/', 'Enter')}
            onLeave={() => routeLog('/', 'Leave')}>
            <Route
              path="news"
              component={NewsFeed}
              onEnter={() => routeLog('/news', 'Enter')}
              onLeave={() => routeLog('/news', 'Leave')}/>
            <Route
              path="news/:storyId"
              component={Story}
              onEnter={() => routeLog('/news/:storyId', 'Enter')}
              onLeave={() => routeLog('/news/:storyId', 'Leave')}/>
            <IndexRoute
              component={NewsFeed}
              onEnter={() => routeLog('IndexRoute', 'Enter')}
              onLeave={() => routeLog('IndexRoute', 'Leave')}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default Routes;
