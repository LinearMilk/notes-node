// var obj = {
//   name: "Witold"
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "Witold","age":34}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require("fs");

var originalNote = {
  title: "Some title",
  body: "Some body"
};

var noteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", noteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
