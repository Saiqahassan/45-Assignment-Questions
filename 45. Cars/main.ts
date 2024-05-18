// Define a function 
function info_car(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    
// Add additional options to the car object
options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
});

    return car;

}

// Calling the function 
let my_car = info_car("Honda", "Civic", "color: White", "Sunroof: True", "Year: 2022");

// print the variable
console.log(my_car);
