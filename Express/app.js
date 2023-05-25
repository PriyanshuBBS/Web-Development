// Always do whenever making express app
const express = require("express");
const app = express();
const path = require("path");
const port = 80;
 
// *** L 73 : For serving static files
// When type localhost/static/<filename>
app.use('/static', express.static('static'))

// *** L72: Pug Templetae Engine ***
// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory, (not : make a views directory)
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint

// get request
app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Harry and testing with Post Man");
});

// this will send the title and message to demo.pug
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Harry");
});

// *** Post request, apply post in postman
app.post("/about", (req, res)=>{
    res.send("/about -> Post");
});

// Sending the status also if /this is accesed
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
