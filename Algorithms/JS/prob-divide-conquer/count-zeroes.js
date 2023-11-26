function countZeroes(arr) {
  //linear time
  /*idx = arr.indexOf(0);
  if (idx > -1) {
    return arr.length - idx;
  }
  return 0;*/

  //logarithmic time
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let middleIdx;
  let middle;
  while (true) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    middle = arr[middleIdx];
    if (leftIdx === rightIdx) {
      if (middle === 0) {
        return arr.length - middleIdx;
      } else {
        if (middleIdx + 1 === arr.length) return 0;
        else return arr.length - (middleIdx + 1);
      }
    } else {
      if (middle === 0) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    }
  }
}

module.exports = countZeroes;
