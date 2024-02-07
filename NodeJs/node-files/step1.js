//https://www.freecodecamp.org/news/modules-in-javascript/
const fs = require("fs");
const process = require("process");

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(`Error reading ${path}`, err);
      process.exit(1);
    }
    console.log(data);
  });
}
//cat("one.txt");
const filepath = process.argv[2];
cat(filepath);
