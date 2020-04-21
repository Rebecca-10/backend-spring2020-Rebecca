//topics used in this file are: FSpackage, JSON,Javascript Objects.
const fs = require("fs");

//placeholder for our object.
let persistentObject = null;

//The file we are working on so we dont accidentally use another string.
let filename = "persistentObject.json";


//check if file exists or not.
let doesFileExist = fs.existsSync(filename);

//if exists..
if(doesFileExist){

    //read it
    let existingJSON = fs.readFileSync(filename);
    console.log(`Read file: "${existingJSON}"`);

    //and convert it to an object
    persistentObject = JSON.parse
}