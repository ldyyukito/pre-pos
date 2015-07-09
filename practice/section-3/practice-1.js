function create_updated_collection(collection_a, object_b) {
  for (var i = 0; i < collection_a.length; i++)
    FindSameItem(collection_a[i], object_b);
  return collection_a;
}

function FindSameItem(item, object_b) {
  for (var y = 0; y < object_b.value.length; y++) {
    if (item.key === object_b.value[y]) {
      item.count--;
      return;
    }
  }
}
