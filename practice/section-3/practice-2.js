/*function create_updated_collection(collection_a, object_b) {
  for (var i = 0; i < collection_a.length; i++)
    FindSameItem(collection_a[i], object_b);
  return collection_a;
  }
function FindSameItem(item, object_b) {
  for (var y = 0; y < object_b.value.length; y++) {
    if (item.key === object_b.value[y])
    {
      item.count -= parseInt(item.count / 3);
      return;
    }
  }
}
*/
function create_updated_collection(collection_a, object_b) {
  for (var i in collection_a) {
    if (object_b.value.indexOf(collection_a[i].key) !== -1) {
      collection_a[i].count -= parseInt(collection_a[i].count / 3);
      }
  }
return collection_a;
}
