//refactoring the code

const fs = require("fs");
const process = require("process");
const axios = require("axios");

function output(out, data) {
  if (out) {
    fs.writeFile(out, data, "utf8", function (err) {
      if (err) {
        console.error(`Cannot write to ${out} : ${err}`);
        process.exit(1);
      }
    });
  } else {
    console.log(data);
  }
}

function cat(path, filename) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(`Cannot read the file ${path}: ${err}`);
      process.exit(1);
    }
    output(filename, data);
  });
}

async function webCat(path, filename) {
  try {
    console.log("OUT", path, filename);
    const res = await axios.get(path);
    output(filename, res.data);
  } catch (e) {
    console.log(e);
  }
}

let out = process.argv[2] === "--out" ? process.argv[3] : null;
let path = process.argv[2] === "--out" ? process.argv[4] : process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path, out);
} else {
  cat(path, out);
}
