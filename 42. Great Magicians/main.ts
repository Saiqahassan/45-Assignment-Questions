//  Define a function to print each magician name from an arrayn
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magician great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`)
}

//  Define an array containing magician names
let magician_names = ["Saiqa", "Faiza", "Saba"];

// Call make_great function to modify magician names
let great_magicians = make_great(magician_names)

// Call show_magician that show modified list of magicians
show_magicians(great_magicians);