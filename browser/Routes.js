import React from 'react';
import NewsFeed from './NewsFeed';
import Story from './Story';
import Main from './Main';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

class Routes extends React.Component {

  render () {
    console.log('!')
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <Route path="news" component={NewsFeed} />
            <Route path="news/:storyId" component={Story} />
            <IndexRoute component={NewsFeed} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default Routes;
