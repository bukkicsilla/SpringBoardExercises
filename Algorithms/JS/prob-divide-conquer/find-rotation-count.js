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
function findRotationCount(arr) {
  const maxIndex = findRotatedMaxIdx(arr);
  return (maxIndex + 1) % arr.length;
}

module.exports = findRotationCount;
