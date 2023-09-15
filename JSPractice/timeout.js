function countDown(number) {
  for (let i = number - 1; i > 0; i--) {
    setTimeout(function () {
      console.log(i);
    }, (number - i) * 1000);
  }
  setTimeout(function () {
    console.log("DONE!");
  }, number * 1000);
}
//countDown(9);

function randomGame() {
  let r = Math.random();
  //console.log(r);
  let count = 1;
  let timer = setInterval(function () {
    if (r > 0.75) {
      console.log("count " + count);
      clearInterval(timer);
    } else {
      r = Math.random();
      //console.log(r);
      count++;
    }
  }, 1000);
}
//randomGame();
