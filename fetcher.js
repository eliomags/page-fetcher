// using process to get user input
const process = require("process");

// using fs to work with files
const fs = require("fs");

// using readline to interact with user if file (path) exists and overwritting is permitted
const readline = require("readline");

// importing downloadFile.js to use it in fetcher
const downloadFile = require("./downloadFile");

const fetcher = function (url, path) {
  path = process.argv[3];
  url = process.argv[2];
  let content = "";

  if (fs.existsSync(path)) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("File exists. Overwrite? Type Y or N: \n", (answer) => {
      if (answer === "Y") {
        rl.close();
        return downloadFile(url, path);
      }
      rl.close();
      return;
    });
  }
};

fetcher();
