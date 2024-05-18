// • Make a list of five or more usernames called current_users.
let current_users = ["Ahmed", "bisma", "Faiza", "Mobeen", "Javeria"];

// Make another list of five usernames called new_users.
let new_users = ["Bisma", "faisal", "Arif", "Javeria", "Badar"];

// • Loop through the new_users list to see if each new username has already been used. If it has, print 
// a message that the person will need to enter a new username. If a username has not been used, print 
// a message saying that the username is available
new_users.forEach(new_one_user =>{
   
let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
   
     if (our_condition){
        console.log(`Sorry ${new_one_user} already exist. Enter a new username`);
        
     }else{
        console.log(`This username ${new_one_user} is available`);
        
     }
        
})

