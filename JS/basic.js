const monthlyIncome = 4000;
const yearlyIncome = monthlyIncome * 12;
// const means that you cannot change the value of variable in the next line.

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

let friendsAtParty = 0;
// let means that we can change the value the variable in the next line if we want to.
while (friendsAtParty < 10) {
    friendsAtParty += 1;
}
console.log(friendsAtParty);

let friends = 0;
for (let i = 0; i <= 10; i++) {
    friends++;
}
console.log(friends);

// We can write functions and use them again & again without writing much code.
function addTwo(number) {
   return number += 2;
}
console.log(addTwo(5));