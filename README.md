A simple app that logs at the various lifecycle hooks in a `react` application,
including `onEnter` and `onLeave` hooks from `react-router`.

For `componentWillReceiveProps`, we log out the difference between the previous set of props,
and the new props coming in. (This works well for simple props, but the props that `react-router`
passes are more complex, so it may not be as helpful there);
