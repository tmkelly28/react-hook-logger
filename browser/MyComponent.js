import React from 'react';
import NewsFeed from './NewsFeed';
import Likes from './Likes';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

class WrapperComponent extends React.Component {

  render () {

    const children = this.props.children;
    console.log(children)
    return (
      <div>
        <h1>Welcome to Homepage</h1>
        <Link to="/likes">Likes</Link>
        <Link to="/news">News</Link>
        { children }
      </div>
    )
  }
}

function NewsStory () {
  return (
    <div>
      <h1>Read all about it</h1>
    </div>
  )
}

class MyComponent extends React.Component {

  render () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={WrapperComponent}>
            <Route path="news" component={NewsFeed} />
            <Route path="news/:storyId" component={NewsStory} />
            <Route path="likes" component={Likes} />
            <IndexRoute component={NewsFeed} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default MyComponent;
