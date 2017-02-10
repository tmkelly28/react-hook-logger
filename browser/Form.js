import React from 'react';
import { diff } from './utils';

export default class WriteStory extends React.Component {

  componentWillMount () {
    console.log('Form: componentWillMount');
  }

  componentDidMount () {
    console.log('Form: componentDidMount');
  }

  componentWillReceiveProps (nextProps) {
    console.log('Form: componentWillReceiveProps', 'Here\'s what changed:', diff(this.props, nextProps));
  }

  componentWillUnmount () {
    console.log('Form: componentWillUnmount');
  }

  render () {
    console.log('Form: render');

    return (
      <form>
        <div className="form-group">
          <label htmlFor="story">Your story:</label>
          <input className="form-control" type="text" name="story" placeholder="I don't work, but whatever" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled>Submit Story</button>
        </div>
      </form>
    );
  }
}
