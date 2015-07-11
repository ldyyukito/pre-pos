var FindSameItem = function (itemA, collection_b) {
  for (var x = 0; x < collection_b.value.length; x++) {
    if (collection_b.value[x] === itemA)
      return collection_b.value[x];
  }
  return undefined;
}

function collect_same_elements(collection_a, collection_b) {
  var array = [];
  var num = 0;
  for (var i = 0; i < collection_a.length; i++) {
    var item = FindSameItem(collection_a[i], collection_b);
    if (item) {
      array.push(collection_a[i]);
      num++;
    }
  }
  return array;
}
