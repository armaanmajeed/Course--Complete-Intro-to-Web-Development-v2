const monthlyIncome = 4000;
const yearlyIncome = monthlyIncome * 12;
// const means that you cannot change the value of variable in the next line.
// let means that we can change the value the variable in the next line if we want to.

console.log(monthlyIncome, yearlyIncome);

const firstName = "Armaan";
const middleName = "Majeed";
const lastName = "Khan";

const myName = "My name is " + firstName + " " + middleName + " " + lastName;
const myNameTemplate = `My name is ${firstName} ${middleName} ${lastName}`;

console.log(myName);
console.log(myNameTemplate);

const skyIsBlue = true;

if (skyIsBlue) {
    console.log("The sky is blue!");
} else {
    console.log("The sky is not blue!!");
}