const people = ["Greg", "Mary", "Devon", "James"];
people.shift(); //step 1.
people.pop(); //step 2.
people.unshift("Matt"); //step 3.
people.push("Csilla"); //step 4.
const people2 = people.slice(2); //step 5.
//people.slice(2); step 5.
people.indexOf("Mary"); //step 6.
people.indexOf("Foo"); //step 7.
const people3 = ["Greg", "Mary", "Devon", "James"];
people3.splice(2, 1, "Elizabeth", "Artie"); //step 8.
const withBob = people.concat("Bob"); //step 9.
