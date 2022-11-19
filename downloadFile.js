// using request to get body data from target URL
const request = require("request");

// using fs to work with files
const fs = require("fs");

const downloadFile = (url, path) => {
  return request(url, (error, response, body) => {
    if (error != null) {
      console.log("error:", error); // Print the error if one occurred
    }
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    content = body;

    fs.writeFile(path, content, (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
      console.log(
        "Downloaded and saved " + content.length + " bytes to " + path
      );
    });
  });
};

module.exports = downloadFile;
