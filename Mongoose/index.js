// Setup Mongoose
// 1. cd Folder name
// 2. npm init and create json just press enter 
// 3. npm install mongoose

// getting started with mongoose and js
// copied from mongoose documentation
const mongoose = require('mongoose');

// Changes needed to apply to newer NodeJs versions
// replacing localhost by 0.0.0.0
// mongodb://localhost:27017/ by mongodb://0.0.0.0:27017/

mongoose.connect('mongodb://0.0.0.0:27017/HarryKart', { useNewUrlParser: true })

// node <file name> in terminal to run the file

// Code to connect
var db = mongoose.connection;
// if error occurs
db.on('error', console.error.bind(console, 'connection error'));

// if connected sucessfully
db.once('open', function () {
  console.log("Connected Sucessfully")
});

// How data is stored / a template
const kittySchema = new mongoose.Schema({
  name: String
});
// Adding a method to object
kittySchema.methods.speak = function speak() {
  const greeting = 'Meow name is ' + this.name
  console.log(greeting);
};

// Locking the schema or converting into Model
const Kitten = mongoose.model('HarryKitens', kittySchema);

// Creating objects (which will be stored as documents)
const HarryKitty = new Kitten({ name: 'HarryKitty' });
const HarryKittys = new Kitten({ name: 'Harry Hatela' });

console.log(HarryKitty.name);
HarryKitty.speak();

// saves the collection to MongoDB
// HarryKitty.save();
// HarryKitty.speak();

// HarryKittys.save();

const kit = Kitten.find({ name: "Harry Hatela" });
console.log(kit);