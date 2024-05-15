var alien_color = "green";
// pass
if (alien_color === "green") {
    console.log("The player just earned 5 points");
}
//  fail
alien_color = "red";
if (alien_color === "green") {
    console.log("The player just earned 5 points");
}
