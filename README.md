A simple app that logs at the various lifecycle hooks in a `react` application,
including `onEnter` and `onLeave` hooks from `react-router`.

You may configure the logging in `browser/config.js`. If `colorByComponent` is false (default),
then the logs will be colored per hook (i.e. each lifecycle hook will have the same color).
If `colorByComponent` is true, then the logs will be colored by component (i.e. each log for
the same component will have the same color).

For `componentWillReceiveProps`, we try to log out the difference between the previous set of props,
and the new props coming in. (This works well for simple props, but the props that `react-router`
passes are more complex, so it may not be as helpful there);
