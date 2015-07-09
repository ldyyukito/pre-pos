function FindSameItem(item, array) {
  for (var y = 0; y < array.length; y++)     //下次做题应理清函数间调用的关系，李亚学姐：但是函数里放的是result，而不是collection，所以不需要减
  {
    if (item === array[y].key) {
      array[y].count++;
      return;
    }
  }
  array.push({key: item, count: 1});
}
function count_same_elements(collection) {
  var result = [];
  for (var x = 0; x < collection.length - 1; x++) {
    FindSameItem(collection[x], result);
  }
  result.push({
    key: collection[collection.length - 1].charAt(0),
    count: parseInt(collection[collection.length - 1].charAt(2))
  });
  return result;
}
