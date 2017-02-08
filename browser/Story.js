import React from 'react';
import { Link } from 'react-router';

export default class Story extends React.Component {

  componentDidMount () {
    const showStory = this.props.showStory;
    const storyId = this.props.routeParams.storyId;
    showStory(+storyId);
  }

  render () {

    let selectedStory = this.props.selectedStory;
    if (!selectedStory.id) { // in case we refresh while viewing the page
      const storyId = +this.props.routeParams.storyId;
      selectedStory = this.props.newsFeed.filter(story => story.id === storyId)[0] || {};
    }

    return (
      <div>
        <h3>{ selectedStory.text }</h3>
        <Link to="/news">Back to Feed</Link>
      </div>
    );
  }
}
