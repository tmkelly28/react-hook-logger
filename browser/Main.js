import React from 'react';

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

  componentDidMount () {
    // pretend this is axios.get...
    Promise.resolve().then(() => this.setState({ newsFeed }));
  }

  showStory (storyId) {
    const selectedStory = this.state.newsFeed.filter(story => story.id === storyId)[0] || {};
    this.setState({ selectedStory});
  }

  render () {
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
