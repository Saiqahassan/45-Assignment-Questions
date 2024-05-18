//  Define a function to print each magician name from an arrayn
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magician great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//  Define an array containing magician names
var magician_names = ["Saiqa", "Faiza", "Saba"];
// Making a copy of original array through .slice function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//  Show both arrays original and copied
// original
console.log("Original array\n");
show_magicians(magician_names);
// copied
console.log("\nCopied array\n");
show_magicians(copy_great_magicians);
