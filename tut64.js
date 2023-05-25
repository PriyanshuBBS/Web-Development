// Modules: are the collection of function in NodeJs

// Importing the module
const fs = require("fs");
// readFileSync : syncronusly read the file (till file reading is not complete no futher work)
const text = fs.readFileSync("dele.txt", "utf-8"); // Reading the file
console.log(text);

// ** Replacing text in file
let texts = fs.readFileSync("dele.txt", "utf-8");
texts = texts.replace("World", "Domain");

console.log("The content of the file is")
console.log(texts);

console.log("Creating a new file...")

// Syncronus Writing to the file
fs.writeFileSync("rohan.txt", texts);

// How to run : Run in terminal
