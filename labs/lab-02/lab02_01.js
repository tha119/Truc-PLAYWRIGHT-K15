const reader = require("readline-sync");

let height = reader.question("your height: ");
let weight = reader.question("your weight: ");
const bmi = weight/(height*height);
console.log(`Your BMI: ${bmi}`);

if (bmi < 18.5){
    console.log("Underweight");
} else if (bmi<= 24.9){
    console.log ("Normal weight");
} else if (bmi<=29.9 ){
    console.log ("Overweight");
} else {
    console.log("Obesity");
}   
