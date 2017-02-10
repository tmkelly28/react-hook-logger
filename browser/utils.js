// obj1 is the original/previous object
// obj2 is the new object we're searching for changes on
export const diff = (obj1, obj2) => {
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
