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

function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a);
  for (var i = 0; i < collection_c.length; i++)
    FindItem(collection_c[i], object_b);
  return collection_c;
}
function FindItem(item, object_b)       //一定要改名！js同名函数调用时会把前面的覆盖掉！切记!切记!
{
  for (var y = 0; y < object_b.value.length; y++) {
    if (item.key === object_b.value[y]) {
      item.count -= parseInt(item.count / 3);
      return;
    }
  }
}
