//Part I
//1. true
console.log(2 == "2");
//2. true
console.log(2 === 2);
//3. 10 % 3 = 1
console.log(10 % 3);
//4. true
console.log(10 % 3 === 1);
//5. false
console.log(true && false);
//6. true
console.log(false || true);
//7. true
console.log(true || false);

//Part II
//1. The code will print: "Keep it up!"
let isLearning = true;
if (isLearning) {
  console.log("Keep it up!");
} else {
  console.log("Pretty sure you are learning....");
}
//2. after the if we need a boolean expression or value (true or false),
//the isLearning is true, so the if clause will be executed.

//1. The code will print: "third".
//2. The value of firstVariable is undefined.
//3. It is not "truthy", but "falsey". Because undefined is a "falsey" value.
//4. The value of the secondVariable is "falsey" too. An empty string has a "falsey" value.
//5. The value of thirdVariable is  “truthy”. Only the number 0 has a falsey value,
//all other numbers have "truthy" value.
let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if (firstVariable) {
  console.log("first");
} else if (firstVariable || secondVariable) {
  console.log("second");
} else if (firstVariable || thirdVariable) {
  console.log("third");
} else {
  console.log("fourth");
}

//Part III
const r = Math.random();
if (r > 0.5) {
  console.log("Over 0.5");
} else {
  console.log("Under 0.5");
}
//2. What is a falsey (falsy) value? A falsey value evaluates to false.
//In JavaScript there are 6 falsey values: undefined, null, NaN, 0, "" (empty string), and false.
