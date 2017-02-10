import React from 'react';
import { Link } from 'react-router';
import Logger from './Logger';

class Story extends React.Component {

  componentDidMount () {
    const showStory = this.props.showStory;
    const storyId = this.props.routeParams.storyId;
    showStory(storyId);
  }

  render () {
    const selectedStory = this.props.selectedStory;

    return (
      <div>
        <h3>{ selectedStory.text }</h3>
        <Link to="/news">Back to Feed</Link>
      </div>
    );
  }
}

export default Logger(Story, 'Story');
