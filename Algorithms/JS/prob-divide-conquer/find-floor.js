function findFloor(arr, val) {
  const le = arr.length;
  if (val < arr[0]) return -1;
  if (val > arr[le - 1]) return arr[le - 1];
  let left = 0;
  let right = le - 1;
  let result = arr[0];
  while (left <= right) {
    let m = Math.floor((left + right) / 2);
    let mVal = arr[m];
    if (mVal === val) return arr[m];
    else if (mVal > val) {
      right = m - 1;
    } else {
      result = m;
      left = m + 1;
    }
  }
  return arr[result];
}

module.exports = findFloor;
