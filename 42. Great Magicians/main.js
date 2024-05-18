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
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
