function make_shirt (size: string = "Large", printMessage: string = "I love TypeScript"){
    console.log(`Creating a ${size} size shirt with ${printMessage} message printed on it`);
    
}

// Calling a function with by default message
make_shirt();

// Calling a function now with Medium size and default message
make_shirt("Medium");

// Calling a function now with Small size and different message
make_shirt("Small", "I am Pakistani")