import React from 'react';
import axios from 'axios';
import Logger from './Logger';

class Main extends React.Component {

  constructor () {
    super();
    this.state = {
      newsFeed: [],
      selectedStory: {}
    };
    this.showStory= this.showStory.bind(this);
  }

  setStateAndLog (field, data) {
    console.log('--------------------------------------');
    console.log(`about to set state on ${field}`);
    this.setState({ [field]: data }, () => {
      console.log(`done setting state on ${field}`);
      console.log('--------------------------------------');
    });
  }

  componentDidMount () {
    axios.get('/api/news')
      .then(res => res.data)
      .then(newsFeed =>
        this.setStateAndLog('newsFeed', newsFeed));
  }

  showStory (storyId) {
    axios.get(`/api/news/${storyId}`)
      .then(res => res.data)
      .then(selectedStory =>
        this.setStateAndLog('selectedStory', selectedStory));
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
