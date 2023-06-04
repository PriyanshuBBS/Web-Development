console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length; // Average value of array
}
// exporting the module when have only average
// module.exports = average;

// Now we have to import as mod
module.exports = {
    avg: average,
    name: "Priyanshu",
    repo: "GitHub"
}