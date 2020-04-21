const fs = require("fs");

//JSON: Javascript Object Notation. before JSON, we had XML
//best way to save ojects natively, cant save functions
let myObject = {
    "myName": "Rebecca",
    "myJob": "Shine", 
    "favfood":"spaghetti"
};

//let converted =myObject.toString();
//console.log (converted);

//converts a Javascript object to a string in the format of jason
JSON.stringify();

let converted = JSON.stringify(myObject);

//console.log(typeof converted);

//we write our JSON string to a file.
console.log("Saving object to file");
fs.writeFileSync("SavedData.json", converted, "utf8");
console.log("Finished") 

//we read our JSON from a file.
let contents = fs.readFileSync("savedData.j", "utf8");
//console.log(type of contents);son

let anObjectAgain = JSON.parse(contents);
console.log(anObjectAgain);
