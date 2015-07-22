function count_same_elements(collection) {
  var objResult = {};
  var result = [];
  unifiedForm(collection).forEach(function(val) {
    objResult[val.key] = objResult[val.key] || 0; // objResult[key] || 0 意思是 objResult[key] ? objResult[key] : 0;
    objResult[val.key] += val.count;
  })
  for (var i in objResult) {
    result.push({
       key: i,count: objResult[i]});
  }
  return result;
}

function unifiedForm(collection) {
  return collection.map(function(val) {
    return {
      key: val.split("-")[0],
      count: parseInt(val.split("-")[1] || 1) //牢记，并左边如果为真，就不用再看右面了
    }
  })
}
