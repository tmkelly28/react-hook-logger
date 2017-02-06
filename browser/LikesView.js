import React from 'react';

class LikesView extends React.Component {

  constructor (props) {
    super();
  }

  render () {
    return (
      <div>
        <h3>Likes: {this.props.likes}</h3>
        <button className="btn btn-primary" onClick={this.props.handleClick}>Like</button>
      </div>
    );
  }
}

export default LikesView;
