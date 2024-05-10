let personName :string = "saiqa hassan"
// lower case
console.log(personName.toLowerCase())
// Upper case
console.log(personName.toUpperCase())
// Title Case
console.log(personName.replace(/\b\w/g, c => c.toUpperCase()));