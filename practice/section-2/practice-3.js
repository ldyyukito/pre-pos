/*var SYMBBOL—POS = 2；
function objectify(str){
  var key = str,charAt(0);
  var count = 1;
  if(str.indexOf("-">-1)||
     str.indexOf("-">-1)||
     str.indexOf("[]">-1)){
    return{
      key: str.charAt(0);
      count: str.slice(SYMBBOL—POS);
    }
  }
  else {
    count = 1;
  }
}*/



function unifiedForm(collection) {
  return collection.map(function(val) {
      var num = judgeNum(val);
    return {
      key: val.charAt(0),
      count: num
    }
  })
}

function judgeNum(str) {
  var SYMBOL = 2
  var num = 1;
  if (str.indexOf("-") > -1 || str.indexOf("[") > -1 || str.indexOf(":") > -1) {
    num = parseInt(str.slice(SYMBOL));
  }
  return num;
}

function count_same_elements(collection) {
  var objResult = {};
  var result = [];
  unifiedForm(collection).forEach(function(val) {
    objResult[val.key] = objResult[val.key] || 0;
    objResult[val.key] += val.count;
  })
  for (var i in objResult) {
    result.push({
      name: i,
      summary: objResult[i]
    });
  }
  return result;
}









/*function count_same_elements(collection) {             //注意：主程序要写在最前面，这样好看
  var result = [];
  for (var x = 0; x < collection.length; x++) {
    FindSameItem(collection[x], result);
  }
  return result;
}
function FindSameItem(item, array) {
  for (var y = 0; y < array.length; y++) {
    var times = JudgeNum(item);               //注意：参看重构48页说：临时变量times在使用前已经有初值，可以直接用函数的返回值雷家，所以不用定义TIMES是可以的，但我还是不知道加好还是不嫁好。。
    if (item.charAt(0) === array[y].name) {
      array[y].summary += times;
      return;
    }
  }
  array.push({name : item.charAt(0), summary : JudgeNum(item)});
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
  return parseInt(collection.substr(2, sum - 1));
}
*/
