const reader = require ("readline-sync");

let number = reader.question("input a number: ");

if (number % 2 === 0)
    console.log ("it is an even number");
else
    console.log ("it is an odd number ");