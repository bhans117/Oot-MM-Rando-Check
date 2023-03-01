export const localStorageFetcher = key => {
  let item = localStorage.getItem(key);
  if (!item) return null;
  return JSON.parse(item);
}

export const fetchFullLog = key => {
  let item = localStorage.getItem(key);
  if (!item) return null;
  return item;
}


export const fetchFromData = ([key, data]) => {
  switch (key) {
    case 'Location List': 
      let locations =  Object.values(data[key]).filter(value => value.value != null);
      let itemsList = [];
      for (let i = 0; i < locations.length; i++) {
        Object.values(locations[i]).forEach(value => {
          itemsList.push(value)
        })
      }
      return itemsList;
    default:
      console.error('No matcing key in swr: ' + key);
      return null;
  }
}