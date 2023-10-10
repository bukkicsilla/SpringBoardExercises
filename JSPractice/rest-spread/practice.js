/*function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}*/

//ES2015
const filterOutOdds = (...nums) => {
  return nums.filter((num) => num % 2 === 0);
};

function findMin(...nums) {
  return nums.reduce((min, next) => (next < min ? next : min));
}
console.log(findMin(1, 4, 12, -3));
console.log(findMin(1, -1));
console.log(findMin(3, 1));
const numbers = [4, 2, 7, 4, 8, 1, 9, 6, 6, 3, 0];
console.log(findMin(...numbers));

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

const doubleAndReturnArgs = (arr, ...args) => {
  const doubles = args.map((num) => 2 * num);
  return [...arr, ...doubles];
};
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};
const fruits = ["apple", "banana", "cherry"];
console.log(removeRandom(fruits));

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

const dinner = {
  name: "eggplant parmesan",
  time: "1 hour",
  persons: 4,
};

const modifDinner = removeKey(dinner, "time");
console.log(modifDinner);
console.log(dinner);

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
