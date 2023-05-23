const http = require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('tut18.html')

// Make the server and serve the file
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-tyep' : 'text/html'});
    res.end(fileContent)
})

// Type 127.0.0.1 in url to run the code
// Make the server and server the file
server.listen(80,'127.0.0.1',()=>
{
    console.log("Listening on port 80");
});