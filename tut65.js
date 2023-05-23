// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");

// err: is error arises
// data : which is read by function

// fs.readFileSync : Syncronus Function
// Here Line 18 can be exceuted before reading the file as it is async.
fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");
