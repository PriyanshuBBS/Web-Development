// Average is written as module.export make mod = average
// const average = require("./mod"); // Importing the mod
// console.log(average([3,4,5]))


// Importing mod as object
const mod = require("./mod");
console.log(mod.avg([3,4,5]))
console.log(mod.name)
// console.log(mod.name);


