function lowerIndex(arr, val) {
  //if (val > arr[arr.length - 1] || val < arr[0]) return -1;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let middleIdx;
  let middle;
  /*while (true) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    middle = arr[middleIdx];
    if (middle === val) {
      if (leftIdx === rightIdx) return middleIdx;
      else {
        if (arr[middleIdx - 1] !== val) return middleIdx;
        else rightIdx = middleIdx - 1;
      }
    } else if (middle < val) {
      if (rightIdx === leftIdx) {
        if (middleIdx + 1 === arr.length) return -1;
        else return middleIdx + 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    } else {
      rightIdx = middleIdx - 1;
    }
  }*/
  let result = -1;
  while (leftIdx <= rightIdx) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    middle = arr[middleIdx];
    if (middle > val) {
      rightIdx = middleIdx - 1;
    } else if (middle < val) {
      leftIdx = middleIdx + 1;
    } else {
      result = middleIdx;
      rightIdx = middleIdx - 1;
    }
  }
  return result;
}
function upperIndex(arr, val) {
  //if (val > arr[arr.length - 1] || val < arr[0]) return -1;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let middleIdx;
  let middle;
  /*while (true) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    middle = arr[middleIdx];
    if (middle === val) {
      if (leftIdx === rightIdx) return middleIdx;
      else {
        if (arr[middleIdx + 1] !== val) return middleIdx;
        else leftIdx = middleIdx + 1;
      }
    } else if (middle > val) {
      if (rightIdx === leftIdx) {
        return middleIdx - 1;
      } else {
        rightIdx = middleIdx - 1;
      }
    } else {
      leftIdx = middleIdx + 1;
    }
  }*/
  let result = -1;
  while (leftIdx <= rightIdx) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    middle = arr[middleIdx];
    if (middle > val) {
      rightIdx = middleIdx - 1;
    } else if (middle < val) {
      leftIdx = middleIdx + 1;
    } else {
      result = middleIdx;
      leftIdx = middleIdx + 1;
    }
  }
  return result;
}
function sortedFrequency(arr, val) {
  if (val > arr[arr.length - 1] || val < arr[0]) return -1;
  let lowerIdx = lowerIndex(arr, val);
  let upperIdx = upperIndex(arr, val);
  return upperIdx - lowerIdx + 1;
}

module.exports = sortedFrequency;
