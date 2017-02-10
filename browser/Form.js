import React from 'react';
import Logger from './Logger'

class Form extends React.Component {

  render () {
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

export default Logger(Form, 'Form');
