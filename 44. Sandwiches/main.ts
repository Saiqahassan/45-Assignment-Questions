// Define a function with a rest parameter 
function makeSandwich(...items: string[]){

    console.log("\nMaking a sandwich with the following items:\n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow enjoy Sandwich");
    
}

// Call the functions 3 times with 3 different no. of arguments
makeSandwich("Bread", "Chicken", "Cheese", "Mayo", "Ketchup");

makeSandwich("Bread", "Butter", "Egg");

makeSandwich("Bread", "Butter", "Chicken", "Egg", "Cheese", "Ketchup", "Cucumber", "Lettuce")