import { colorByComponent } from './config';

// obj1 is the original/previous object
// obj2 is the new object we're searching for changes on
const diff = (obj1, obj2) => {
  const rtnObj = {};

  // check for values on obj1 that are different in obj2 (including key-value pairs that have been removed)
  for (let key in obj1)
    if (obj1.hasOwnProperty(key))
      if (obj1[key] !== obj2[key]) rtnObj[key] = obj2[key];

  // check for new key value pairs on obj2 that were not present in obj1
  for (let key in obj2)
    if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key))
      rtnObj[key] = obj2[key];

  if (Object.keys(rtnObj).length === 0) return 'No change';
  return rtnObj;
};

const components = ['Form', 'Main', 'NewsFeed', 'Routes', 'Story'];

const yellow = '#cada55'; // componentWillReceiveProps
const red = '#cd5c5c'; // componentWillUnmount

const seagreen = '#1ABC9C'; // componentWillMount
const green = '#27AE60' // componentDidMount
const blue = '#3498db'; // render

const lightpurple = '#884EA0'; // onEnter
const purple = '#8E44AD'; // onLeave

const colors = [yellow, red, seagreen, green, blue, lightpurple, purple];
const componentMap = components.reduce((map, component, idx) =>
  Object.assign(map, { [component]: colors[idx] }), {});

const log = (component, hook, color) => {
  if (colorByComponent) window.console.log(`%c${component}: ${hook}`, `color:${componentMap[component]}`);
  else window.console.log(`%c${component}: ${hook}`, `color:${color}`);
};

export const logComponentWillReceiveProps = (component, oldProps, newProps) => {
  log(component, 'componentWillReceiveProps', yellow);
  console.log(`%c Here\'s what changed:`, `color:${yellow}`);
  console.log(diff(oldProps, newProps));
};
export const logComponentWillUnmount = component => log(component, 'componentWillUnmount', red);
export const logComponentWillMount = component => log(component, 'componentWillMount', seagreen);
export const logComponentDidMount = component => log(component, 'componentDidMount', green);
export const logRender = component => log(component, 'render', blue);
export const logOnEnter = component => log(component, 'onEnter', lightpurple);
export const logOnLeave = component => {
  console.log('--------------------------------------');
  log(component, 'onLeave', purple);
};

