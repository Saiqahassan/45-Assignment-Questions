var guestList = ["Mariam", "Ayesha", "Sadia"];
var message = "Plz come and join us tonight on dinner at our place";
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", ").concat(message));
}
