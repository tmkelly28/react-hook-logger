import React from 'react';
import { Link } from 'react-router';
import Form from './Form';
import Logger from './Logger';

class NewsFeed extends React.Component {
  render () {
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

export default Logger(NewsFeed, 'NewsFeed');
