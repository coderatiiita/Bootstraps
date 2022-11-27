
// Even this solution is kind of wrong

function isItemPresent(item, str) {
  const itemArray = item.slice('');
  for (let i = 0; i < itemArray.length; i++) {
    if (!str.includes(itemArray[i])) {
      return false;
    }
  }
  return true;
}

function findString(arr, str) {

  let longestStr = null;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (isItemPresent(item, str)) {
      if (longestStr) {
        if (longestStr.length < item.length) {
          longestStr = item;
        }
      } else {
        longestStr = item;
      }
    }
  }

  return longestStr;
}

console.log(findString(["ale", "apple", "monkey", "plea"], 'abpcplea'));
console.log(findString(["pintu", "geeksfor", "geeksgeeks",
  " forgeek"], 'geeksforgeeks'));