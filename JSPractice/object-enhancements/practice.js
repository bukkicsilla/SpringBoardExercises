/*function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}*/

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}
const myTeacher = createInstructor("Katie", "Hayes");
console.log(myTeacher);

let favoriteNumber = 42;

/*let instructor = {
  firstName: "Colt",
};*/
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite",
};

instructor[favoriteNumber] = "That is my favorite!";
console.log(instructor);

/*let instructor = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};*/

const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};
//RETURN
function createAnimal(species, verb, word) {
  return {
    species,
    [verb]() {
      return word;
    },
  };
}
const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
console.log(d.bark()); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
console.log(s.bleet()); //"BAAAAaaaa"
