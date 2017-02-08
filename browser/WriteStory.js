import React from 'react';

export default class WriteStory extends React.Component {

  render () {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="story">Your story:</label>
          <input className="form-control" type="text" name="story" placeholder="Enter new stuff" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit Story</button>
        </div>
      </form>
    );
  }
}
