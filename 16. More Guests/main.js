var guestList = ["Mariam", "Ayesha", "Sadia"];
var absentGuest = "Mariam";
var newGuest = "Maheen";
guestList[0] = newGuest;
var message = "Plz come and join us tonight on dinner at our place";
console.log("Good news, we found a bigger table so we invite 3 more guests");
guestList.unshift("Rida");
guestList.splice(2, 0, "Amal");
guestList.push("Farzana");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", \n").concat(message));
}
