const express = require("express");
const path = require("path");
const app = express();
const port = 80;
// it is not used but for knowledge it is added
const bodyparser = require("body-parser")
const mongoose = require('mongoose');
const { rmSync } = require("fs");
mongoose.connect('mongodb://0.0.0.0:27017/contactDance', { useNewUrlParser: true })

// Creating schema
const ContactSchema = new mongoose.Schema({
  name: String,
  Phone: String,
  Address: String,
  Email: String,
  desc: String 
  });
const Contact = mongoose.model('Contact', ContactSchema);

// 1. npm init and form
// views contain all the templates

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    // changed to home.pug for last tut illustration otherwise it is index.pug
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const params = {}
    // changed to home.pug for last tut illustration otherwise it is index.pug
    res.status(200).render('contact.pug', params);
})

// take all the request and save it in database
app.post('/contact', (req, res)=>{
    // saving the coming data to object
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item saved")
    }).catch(()=>{
        res.status(400).send("Item not saved")
    });
})

// by above code data is saved

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});