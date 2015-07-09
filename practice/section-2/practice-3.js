function FindSameItem(item, array) {
  for (var y = 0; y < array.length; y++) {
    var time = JudgeNum(item);
    if (item === array[y].key) {
      array[y].count += time;
      return;
    }
  }
  array.push({key: item, count: 1});
}

function JudgeNum(item) {
  var num = 1;
  if (item.length > 3) {
    num = process(item);
  }
  else if (item.length === 3) {
    num = parseInt(item.charAt(2));
  }
  return num;
}


function process(collection) {
  var sum = 0;
  for (var temp = 0; temp < collection.length; temp++) {
    if (collection[temp] != ']') {
      sum++;
    }
    else {
      break;
    }
  }
  return parseInt(collection.substr(2, 2));
}


function count_same_elements(collection) {
  var result = [];
  for (var x = 0; x < collection.length; x++) {
    FindSameItem(collection[x], result);
  }
  return result;
}
