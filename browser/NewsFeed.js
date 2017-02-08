import React from 'react';
import { Link } from 'react-router';
import WriteStory from './WriteStory';

export default function NewsFeed (props) {

  const stories = props.newsFeed;

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
      {/* <WriteStory /> */}
    </div>
  );
}
