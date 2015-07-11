var FindSameItem = function(itemA,collection_b){     //记住：JS里面这个花括号不要放在下一行；2个空格作为缩进，用驼峰命名法，单词首字母大写。
  for(var x = 0;x < collection_b.length;x++)
  {
  if(collection_b[x] === itemA)                    //记住：等于号是三个，左右一定要空格；
   return collection_b[x];
  }
 return undefined;
}

function collect_same_elements(collection_a, collection_b) {
  var array = [];
  var num = 0;
  for(var i = 0;i < collection_a.length;i++)
   {
    var item = FindSameItem(collection_a[i],collection_b);
    if (item)
  	{
         array[num]=collection_a[i];
         num++;
  	}
   }
return array;
}
