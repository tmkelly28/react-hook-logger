import React from 'react';
import { diff } from './utils';

const newsFeed = [
  { id: 1, text: 'Cody just changed his status: "My favorite food is pizza!"' },
  { id: 2, text: 'Cody just liked this post: "How to guilt humans into giving you more snacks"' }
];

export default class Main extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      newsFeed: [],
      selectedStory: {}
    };

    this.showStory= this.showStory.bind(this);
  }

  componentWillMount () {
    console.log('Main: componentWillMount');
  }

  componentDidMount () {
    console.log('Main: componentDidMount');
    // setting state asynchronously in componentDidMount
    // to simulate a network call!
    setTimeout(() => {
      console.log('--------------------------------------');
      console.log('about to set state with the news feed!');

      this.setState({ newsFeed }, () => {
        console.log('done setting state with the news feed');
        console.log('--------------------------------------');
      });
    });
  }

  componentWillReceiveProps (nextProps) {
    console.log('Main: componentWillReceiveProps', 'Here\'s what changed:', diff(this.props, nextProps));
  }

  componentWillUnmount () {
    console.log('Main: componentWillUnmount');
  }


  showStory (storyId) {
    const selectedStory = this.state.newsFeed.filter(story => story.id === storyId)[0] || {};
    console.log('--------------------------------------');
    console.log('about to setState with the selected story');
    this.setState({ selectedStory}, () => {
      console.log('done setting state with the selected story');
    console.log('--------------------------------------');
    });
  }

  render () {
    console.log('Main: render');

    const children = this.props.children;

    return (
      <div>
        <h1>Welcome to Homepage</h1>
        {
          React.cloneElement(children, Object.assign({}, this.state, {
            showStory: this.showStory
          }))
        }
      </div>
    );
  }

}
