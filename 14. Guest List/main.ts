let guestList : string[] = ["Mariam", "Ayesha", "Sadia"]

let message : string = "Plz come and join us tonight on dinner at our place"

for (let i = 0; i < guestList.length; i++) {
    
    console.log(`Dear ${guestList[i]}, ${message}`)
    
}