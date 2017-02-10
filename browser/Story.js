import React from 'react';
import { Link } from 'react-router';
import { diff } from './utils';

export default class Story extends React.Component {

  componentWillMount () {
    console.log('Story: componentWillMount');
  }

  componentDidMount () {
    console.log('Story: componentDidMount');

    const showStory = this.props.showStory;
    const storyId = this.props.routeParams.storyId;
    showStory(+storyId);
  }

  componentWillReceiveProps (nextProps) {
    console.log('Story: componentWillReceiveProps', "Here's what changed: ", diff(this.props, nextProps));
  }

  componentWillUnmount () {
    console.log('Story: componentWillUnmount');
  }

  render () {
    console.log('Story: render');

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
