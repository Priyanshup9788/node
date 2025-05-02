let opration = require("./functions");

let digit = 0;

let arguments = process.argv.splice(2);


console.log("1.Increment");
console.log("2.Decement");
console.log("0.Exit");

if (arguments == 1) {
    digit = opration.inc(digit);
    console.log(digit);
}
if (arguments == 2) {
    digit = opration.dec(digit);
    console.log(digit);
}

