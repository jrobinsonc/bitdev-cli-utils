const parseArgs = (slice = 0) => {
  return process.argv.slice(slice).reduce((map, item, index) => {
    let match = null;
  
    switch (true) {
      case (match = item.match(/^(?:\-\-([a-z]+)|\-([a-z]))(?:=(.+))?$/)) !== null:
        const [, longName, shortName, value] = match;
        const parsedValue = typeof value === 'undefined' ? true : value;
        const parsedName = typeof longName === 'undefined' ? shortName : longName;
        
        map.set(parsedName, parsedValue);
        break;
    
      default:
        map.set(index, item);
        break;
    }
  
    return map;
  }, new Map)
};

export default parseArgs;