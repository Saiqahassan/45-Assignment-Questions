let guestList : string[] = ["Mariam", "Ayesha", "Sadia"]

let absentGuest = "Mariam"

let newGuest = "Maheen"

guestList[0] = newGuest;


guestList.unshift("Rida"); 
guestList.splice(2,0, "Amal");
guestList.push("Farzana");


console.log("sorry we can't arrange a bigger dinner table so only 2 guests are invited ");

while (guestList.length > 2){

   let removeGuest = guestList.pop();

   console.log(removeGuest, "\n sorry you are not invited to dinner");

}
for (let i = 0; i < guestList.length; i++) {
    
    console.log(`Dear ${guestList[i]}, \n\tyou are still invited at dinner`)

}

guestList.splice(0,2);
console.log(guestList);


