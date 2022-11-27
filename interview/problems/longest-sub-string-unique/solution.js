function printLongestSubString(str, k) {

  let uniqueItemsArray = [];
  let uniqueSubArray = [];
  let uniqueCount = 0;

  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    uniqueItemsArray.push(item);

    if (!uniqueItemsArray.includes(item)) {
      uniqueCount++
    }

    if (uniqueCount === k) {
      if (uniqueItemsArray.length > k) {
        
      }
      
    }

    if (uniqueItemsArray.length === k) {
      uniqueSubArray.push()
    }
  }


}


console.log(printLongestSubString("aabbcc", 3));