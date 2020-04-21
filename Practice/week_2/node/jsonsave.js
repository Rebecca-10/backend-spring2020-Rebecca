const fs = require("fs");

let objectToSave ={
    key1: "Some key",
    isTrue: false,
    someFunction: function(){console.log("hello");},
    totalAmount:100900
}

JSON.stringify();

let convert = JSON.stringify(ojectToSave);
console.log("Saving object to file");
fs.writeFileSync("SavedObject.json", convert, "utf8");
console.log("Done") 


let contents = fs.readFileSync("savedObject.json", "utf8");

let anObjectAgain = JSON.parse(contents);
console.log(anObjectAgain);