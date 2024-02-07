const fs = require("fs");
const process = require("process");
const axios = require("axios");

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(`Error reading ${path}`, err);
      process.exit(1);
    }
    console.log(data);
  });
}
function catWrite(path, filename) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(`Cannot read the file ${path}: ${err}`);
      process.exit(1);
    }
    fs.writeFile(filename, data, "utf8", function (err) {
      if (err) {
        console.error(`Cannot write to file ${filename}: ${err}`);
      }
    });
  });
}

async function webCat(url) {
  try {
    const res = await axios.get(url);
    console.log(res);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

async function webCatWrite(path, filename) {
  try {
    const res = await axios.get(path);
    fs.writeFile(filename, res.data, "utf8", function (err) {
      if (err) {
        console.error(`Cannot write to file ${filename}: ${err}`);
      }
    });
  } catch (e) {
    console.log(e);
  }
}
//let path = process.argv[2];
let out = process.argv[2] === "--out" ? process.argv[3] : null;
let path = process.argv[2] === "--out" ? process.argv[4] : process.argv[2];

if (path.slice(0, 4) === "http") {
  if (out) webCatWrite(path, out);
  else webCat(path);
} else {
  if (out) catWrite(path, out);
  else cat(path);
}
