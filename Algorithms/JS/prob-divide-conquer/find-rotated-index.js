function binarySearch(arr, val) {
  leftIdx = 0;
  rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let mIdx = Math.floor((leftIdx + rightIdx) / 2);
    let mVal = arr[mIdx];
    if (mVal < val) {
      leftIdx = mIdx + 1;
    } else if (mVal > val) {
      rightIdx = mIdx - 1;
    } else {
      return mIdx;
    }
  }
  return -1;
}
function findRotatedMaxIdx(arr) {
  if (arr.length == 1) return 0;
  if (arr.length === 0) return -1;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let m = Math.floor((left + right) / 2);
    let mVal = arr[m];

    if (right - left === 1) {
      return arr[left] > arr[right] ? left : right;
    }
    if (mVal > arr[right]) {
      //console.log("right side out of order");
      left = m;
    } else if (mVal < arr[left]) {
      //console.log("left side out of order");
      right = m;
    } else {
      return arr.length - 1;
    }
  }
}
function findRotatedIndex(arr, val) {
  const maxIndex = findRotatedMaxIdx(arr);
  if (arr[maxIndex] === val) return maxIndex;
  else if (val >= arr[0]) {
    //console.log("Binary Search in the left")
    return binarySearch(arr.slice(0, maxIndex), val);
  } else {
    //console.log("Binary Search in the right");
    const cutArr = arr.slice(maxIndex + 1);
    let result = binarySearch(cutArr, val);
    return result > -1 ? result + maxIndex + 1 : result;
  }
}

module.exports = findRotatedIndex;
