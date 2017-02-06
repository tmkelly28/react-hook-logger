import React from 'react';
import LikesView from './LikesView';

class Likes extends React.Component {

  constructor () {
    super();
    this.state = {
      likes: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render () {
    return <LikesView likes={this.state.likes} handleClick={this.handleClick} />
  }
}

export default Likes;
