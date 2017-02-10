import React from 'react';
import axios from 'axios';
import Logger from './Logger';

class Main extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      newsFeed: [],
      selectedStory: {}
    };
    this.showStory= this.showStory.bind(this);
  }


  componentDidMount () {
    // setting state asynchronously in componentDidMount
    // to simulate a network call!
    axios.get('/api/news')
      .then(res => res.data)
      .then(newsFeed => {
        console.log('--------------------------------------');
        console.log('about to set state with the news feed!');
        this.setState({ newsFeed });
        console.log('done setting state with the news feed');
        console.log('--------------------------------------');
      });
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

export default Logger(Main, 'Main');
