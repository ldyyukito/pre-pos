var FindSameItem = function (itemA, collection_b) {
  for (var x = 0; x < collection_b[0].length; x++) {
    if (collection_b[0][x] === itemA)
      return collection_b[0][x];
  }
  return undefined;
};

function collect_same_elements(collection_a, collection_b) {
  var array = [];
  for (var i = 0; i < collection_a.length; i++) {
    var item = FindSameItem(collection_a[i], collection_b);
    if (item) {
      array.push(collection_a[i]);
    }
  }
  return array;
}
