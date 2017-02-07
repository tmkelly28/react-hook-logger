console.log('hello world')

import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';
// <MyComponent />,

function MyParentComponent (props) {
  return (
    <div>
      <h1>I am the parent</h1>
      { props.children }
    </div>
  )
}

function ChildComponent () {
  return <div>I am the child</div>
}

function MyOtherComponent () {
  return (
    <div>
      <MyParentComponent>
        <ChildComponent />
      </MyParentComponent>
    </div>
  );
}
ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);
