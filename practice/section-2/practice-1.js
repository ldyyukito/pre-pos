function FindSameItem(item, array) {
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
