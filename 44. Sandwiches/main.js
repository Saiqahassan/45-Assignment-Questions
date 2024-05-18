// Define a function with a rest parameter 
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy Sandwich");
}
// Call the functions 3 times with 3 different no. of arguments
makeSandwich("Bread", "Chicken", "Cheese", "Mayo", "Ketchup");
makeSandwich("Bread", "Butter", "Egg");
makeSandwich("Bread", "Butter", "Chicken", "Egg", "Cheese", "Ketchup", "Cucumber", "Lettuce");
