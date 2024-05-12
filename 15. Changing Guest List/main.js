var guestList = ["Mariam", "Ayesha", "Sadia"];
var absentGuest = "Mariam";
var newGuest = "Maheen";
guestList[0] = newGuest;
var message = "Plz come and join us tonight on dinner at our place";
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", \n").concat(message));
}
console.log(absentGuest, "is not coming at the dinner party");
