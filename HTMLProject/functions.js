function difference(x, y) {
  return x - y;
}
//console.log(difference(2, 2));
//console.log(difference(0, 2));

function product(x, y) {
  return x * y;
}
//console.log(product(2, 2));
//console.log(product(0, 2));

/*function printDay(number) {
  if (number < 1 || number > 7) return undefined;
  let result = "";
  switch (number) {
    case 1:
      result = "Sunday";
      break;
    case 2:
      result = "Monday";
      break;
    case 3:
      result = "Tuesday";
      break;
    case 4:
      result = "Wednesday";
      break;
    case 5:
      result = "Thursday";
      break;
    case 6:
      result = "Friday";
      break;
    default:
      result = "Saturday";
  }
  return result;
}*/

function printDay(number) {
  const d = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return d[number];
}
//console.log(printDay(4));
//console.log(printDay(41));

function lastElement(arr) {
  if (!arr.length) return undefined;
  return arr[arr.length - 1];
}
//console.log(lastElement([1, 2, 3, 4]));
//console.log(lastElement([]));

function numberCompare(num1, num2) {
  if (num1 > num2) return "First is greater";
  else if (num1 < num2) return "Second is greater";
  else return "Numbers are equal";
}
//console.log(numberCompare(1, 1));
//console.log(numberCompare(2, 1));
//console.log(numberCompare(1, 2));

function singleLetterCount(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();
  let count = 0;
  for (let c of str) {
    if (c === char) count++;
  }
  return count;
}
//console.log(singleLetterCount("amazing", "A"));
//console.log(singleLetterCount("Rithm School", "o"));
//console.log(singleLetterCount("Fluffy is cute", "d"));

function multipleLetterCount(str) {
  const d = {};
  for (let c of str) {
    console.log(d[c]);
    d[c] ? d[c]++ : (d[c] = 1);
  }
  return d;
}
//console.log(multipleLetterCount("hello"));
//console.log(multipleLetterCount("person"));

function arrayManipulation(arr, command, location, value) {
  if (command === "remove") {
    if (location === "end") {
      return arr.pop();
    } else {
      return arr.shift();
    }
  } else {
    if (location === "beginning") {
      arr.unshift(value);
    } else {
      arr.push(value);
    }
    return arr;
  }
}
//console.log(arrayManipulation([1, 2, 3], "remove", "end")); // 3
//console.log(arrayManipulation([1, 2, 3], "remove", "beginning")); // 1
//console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20)); // [20,1,2,3]
//console.log(arrayManipulation([1, 2, 3], "add", "end", 30)); // [1,2,3,30]

function isPalindrome(str) {
  str = str.toLowerCase();
  let revStr = "";
  str = str.split(" ").join("");
  revStr = str.split("").reverse().join("");
  return revStr === str;
}

/*console.log(isPalindrome("testing"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("hannah"));
console.log(isPalindrome("robert"));
console.log(isPalindrome("amanaplanacanalPanama"));
console.log(isPalindrome("a man a plan a canal Panama"));*/

function rockPaperScissor() {
  const items = ["rock", "paper", "scissor"];
  let choice = "";
  while (choice !== "rock" && choice !== "paper" && choice !== "scissor") {
    choice = prompt("rock, paper or scissor? \n");
  }
  const randIndex = Math.floor(Math.random() * items.length);
  const randItem = items[randIndex];
  console.log(randItem);
  if (
    (choice === "scissor" && randItem === "paper") ||
    (choice === "paper" && randItem === "rock") ||
    (choice === "rock" && randItem === "scissor")
  ) {
    console.log("You are the winner!");
  } else if (
    (choice === "paper" && randItem === "scissor") ||
    (choice === "rock" && randItem === "paper") ||
    (choice === "scissor" && randItem === "rock")
  ) {
    console.log("You are loser!");
  } else {
    console.log("It is a tie.");
  }
}
//rockPaperScissor();
