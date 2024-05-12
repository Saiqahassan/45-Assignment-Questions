let guestList : string[] = ["Mariam", "Ayesha", "Sadia"]

let absentGuest = "Mariam"

let newGuest = "Maheen"

guestList[0] = newGuest;

let message : string = "Plz come and join us tonight on dinner at our place"

for (let i = 0; i < guestList.length; i++) {
    
    console.log(`Dear ${guestList[i]}, \n${message}`)
    
} 

console.log(absentGuest, "is not coming at the dinner party")