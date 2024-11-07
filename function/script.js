// 1. Define Practice
// Define a function called printHeart that prints out the string "<3"
// Execute your function once
function printHeart() {
    console.log("<3");
    alert("<3");
}
printHeart();

// 2. Return Value Practice
// Write a simple function multiply which accepts two numerical arguments and
// returns their product (multiply them together). Make sure to return the value
// instead of printing it!
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));
alert(multiply(2, 3));
alert(multiply(9, 9));
alert(multiply(5, 4));

// 3. Scope Practice
// A. What is printed to the console when this code runs?
let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
    alert(animal);
}
observe();

// B. What is printed to the console when this code runs?
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
    alert(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);
alert(deadlyAnimal);

// 4. Arrow Function Exercise
// Write an arrow function expression called sayHello. It should accept a single
// string argument, representing a person's name. It should return a greeting string
// as shown below:
const sayHello = (name) => `Hello ${name}!`;

console.log(sayHello("Hagrid"));
console.log(sayHello("Luna"));
alert(sayHello("Hagrid"));
alert(sayHello("Luna"));