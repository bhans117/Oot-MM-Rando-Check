export function generateJSON(text, filename) {
  const groupings = getGroupings(text);
  const generatedJSON = createObjectsFromGroupings(groupings);
  generatedJSON['Name'] = filename;
  localStorage.setItem('spoiler-log', JSON.stringify(generatedJSON));
  return generateJSON;
}

function getGroupings(text) {
  const groups = [];
  let str = ""
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char === '\n') {
      if (str !== "") groups.push(str);
      str = ""
    } else {
      if (char !== '=') str += char;
    }
  }

  return groups;
}

function createObjectsFromGroupings(groupings) {
  const masterObject = {}
  let parentKeys = [""];
  groupings.forEach(group => {
    if(group.includes("Location List")) group = "Location List";
    parentKeys = setKeyValue(group, masterObject, parentKeys);
  });
  return masterObject;
}

function setKeyValue(str, masterObject, parentKeys) {
  let tabSize = 2;
  let whiteSpaces = str.search(/\S|$/);
  let diff = whiteSpaces - ((parentKeys.length-1) * tabSize); // -1 because we include current key

  if (diff < 0) {
    for (let i = 0; i < Math.abs(diff/tabSize); i++) {
      parentKeys.pop();
    }
  }

  let kv = str.split(":");
  let key = kv[0].trim();
  let value;
  if (diff > 0) parentKeys.push(key)
  else parentKeys[parentKeys.length-1] = key;

  // check if it is a colon value
  if (kv.length > 1 && kv[1] !== "") {
    value = kv[1].trim();
    setObject(masterObject, parentKeys, key, value)
  } else {
    setObject(masterObject, parentKeys, key, null)
  }
  return parentKeys;
}

function setObject(masterObject, parentKeys, key, secret) {
  let obj = masterObject;
  for (let i = 0; i < parentKeys.length-1; i++) {
    obj = obj[parentKeys[i]];
  }
  if (secret) {
    obj[key] = {
      value: key,
      secret
    }
  } else {
    obj[key] = {
      value: key
    }
  }
}