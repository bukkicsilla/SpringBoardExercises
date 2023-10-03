const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];
const IDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let card1;
let card2;
let phase = 0;
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
//function setId(array) {}
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  let index = 0;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    //newDiv.classList.add(color);
    newDiv.setAttribute("data-color", color);
    newDiv.setAttribute("data-id", IDS[index]);
    index++;
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  //console.log("you just clicked", event.target);
  if (phase === 0) {
    card1 = event.target;
    event.target.classList.toggle(event.target.dataset.color);
    phase = 1;
  } else if (phase === 1) {
    card2 = event.target;
    event.target.classList.toggle(event.target.dataset.color);

    phase = 2;
    //cards has the same color
    if (
      card1.dataset.color === card2.dataset.color &&
      card1.dataset.id !== card2.dataset.id
    ) {
      card1.classList.add("disabled");
      card2.classList.add("disabled");
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      phase = 0;
    }
    //cards has different colors
    else {
      //phase = 2;
      if (card1.dataset.id !== card2.dataset.id) {
        setTimeout(function () {
          card1.classList.remove(card1.dataset.color);
          card2.classList.remove(card2.dataset.color);
          phase = 0;
        }, 1000);
      }
    }
  } else {
    //console.log("WAITING", phase);
    phase = 0;
    return;
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
