//map函数：根据迭代器选中的函数，便历列表中每一个元素，在完成表示元素的便利后，将函数返回一个数组
function collect_same_elements(collection_a, object_b) {
var array = collection_a.map(function(val) {
return val.key})
return array.filter(function(val){
return (object_b.value.indexOf(val) !== -1 )
});
}
/*var FindSameItem = function (itemA, collection_b) {
  for (var x = 0; x < collection_b.value.length; x++) {
    if (collection_b.value[x] === itemA)
      return collection_b.value[x];
  }
  return undefined;
};

function collect_same_elements(collection_a, collection_b) {
  var array = [];
  for (var i = 0; i < collection_a.length; i++) {
    var item = FindSameItem(collection_a[i].key, collection_b);
    if (item) {
      array.push(collection_a[i].key);
    }
  }
  return array;
}*/

