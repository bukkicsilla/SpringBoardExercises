const set = new Set([1, 1, 2, 2, 3, 4]);
console.log(set); // {1,2,3,4}
const newStr = [...new Set("referee")].join("");
console.log(newStr); //"ref"
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
console.log(m); // Map { [1,2,3] => true, [1,2,3] => false }

function hasDuplicate(arr) {
  return arr.length !== [...new Set(arr)].length;
}
console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false

const vowelCount = (str) => {
  const vowels = "aeiou";
  const arr = str.toLowerCase().split("");
  const arrV = arr.filter((char) => vowels.includes(char));
  const map = new Map();
  for (let char of arrV) {
    map.get(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }
  return map;
};
console.log(vowelCount("Awesome")); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount("Colt")); // Map { 'o' => 1 }
