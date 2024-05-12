let guestList : string[] = ["Mariam", "Ayesha", "Sadia"]

let absentGuest = "Mariam"

let newGuest = "Maheen"

guestList[0] = newGuest;

let message : string = "Plz come and join us tonight on dinner at our place"
   

console.log("Good news, we found a bigger table so we invite 3 more guests");

guestList.unshift("Rida"); 
guestList.splice(2,0, "Amal");
guestList.push("Farzana");

for (let i = 0; i < guestList.length; i++) {
    
    console.log(`Dear ${guestList[i]}, \n${message}`)
    
}