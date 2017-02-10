import React from 'react';
import { Link } from 'react-router';
import Form from './Form';
import { diff } from './utils';

export default class NewsFeed extends React.Component {

  componentWillMount () {
    console.log('NewsFeed: componentWillMount');
  }

  componentDidMount () {
    console.log('NewsFeed: componentDidMount');
  }

  componentWillReceiveProps (nextProps) {
    console.log('NewsFeed: componentWillReceiveProps', 'Here\'s what changed:', diff(this.props, nextProps));
  }

  componentWillUnmount () {
    console.log('NewsFeed: componentWillUnmount');
  }

  render () {
    console.log('NewsFeed: render');

    const stories = this.props.newsFeed;

    return (
      <div>
        <h3>News Feed</h3>
        <ul>
          {
            stories.map(story => {
              return <Link key={story.id} to={`/news/${story.id}`} style={{display:'block'}}>{ story.text }</Link>
            })
          }
        </ul>
        <Form />
      </div>
    );
  }
}
