function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a)
  for (var i in collection_c) {
    if (object_b.value.indexOf(collection_c[i].key) !== -1) {
      collection_c[i].count -= parseInt(collection_c[i].count / 3);
      }
  }
return collection_c;
}
//spilt作用是把一个字符串分割成字符数组，所给的参数是指定分割点
function count_same_elements(collection) {
  var objResult = {};
  var result = [];
  collection.map(function(val) {
    return {  key: val.split("-")[0],
       count: parseInt(val.split("-")[1] || 1) //牢记，并左边如果为真，就不用再看右面了
    }
  }).forEach(function(val) {
      objResult[val.key] = objResult[val.key] || 0; // objResult[key] || 0 意思是 objResult[key] ? objResult[key] : 0;
      objResult[val.key] += val.count;
  })
  for (var i in objResult) {
   result.push({
   key: i,
   count: objResult[i]
   });
}
  return result;
}




























/*function FindSameItem(item, array) {
  for (var y = 0; y < array.length; y++)
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


/*
var  strObjcollection.map(val){
{key:val.spilt["_"][0],
 count:val.spilt("_")[1] ? 1 //      count:val.spilt("_")[1] ? val.spilt("_")  [1] ||1;





for(var i in objResult){
result.push({
key: i,
count: objResult[i]
})
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
*/
