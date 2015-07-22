function count_same_elements(collection) {
  var objResult = {};
  var result = [];
  collection.forEach(function(val){
    objResult[val] =  (objResult[val]+1) || 1;
    })
    for (var i in objResult) {
      result.push({key: i, count: objResult[i]});
    }
    return result;
  }



















/*function findSameItem(item, array) {
  for (var y in array) {
    if (item === array[y].key) {
      array[y].count++;
      return;
    }
  }
  array.push({key: item, count: 1});
}

function count_same_elements(collection) {
  var result = [];
  for (var x in collection) {
    findSameItem(collection[x], result);
  }
  return result;
}*/











/*function FindSameItem(item, array) {
  for (var y = 0; y < array.length; y++) {
    if (item === array[y].key) {
      array[y].count++;
      return;
    }
  }
  array.push({key: item, count: 1});
}
function count_same_elements(collection) {
  var result = [];
  for (var x = 0; x < collection.length; x++) {
    FindSameItem(collection[x], result);
  }
  return result;
}
*/

/*function count_same_elements(collection) {
var result = [];
var arr_counts = {};
for(var i = 0; i < collection.length; i++) {
arr_counts[collection[i]] = (arr_counts[collection[i]] + 1) || 1; // 当第一次有新元素时arr_counts[collection[i]]+1 = NaN所以需要和1相或
}
for(var item in arr_counts) {
result.push({ key: item, count: arr_counts[item]});
}
return result;
}*/
