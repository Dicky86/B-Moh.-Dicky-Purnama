//string
let x ="Moh. Dicky";
let y =" Purnama"
alert(x+y);
console.log(x+y);

//Number
let age = 20;
console.log(age);
alert(age);

//Boolean
let isStudent = true;
console.log(isStudent);
alert(isStudent);

//Array
let hobbies = ["Touring", "Swimming", "Coding"];
console.log(hobbies);
alert(hobbies.join(", "));

//BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
alert(bigNumber);

//Undefined
let notDefined;
console.log(notDefined);
alert(notDefined);

//Null
let emptyValue = null;
console.log(emptyValue);
alert(emptyValue);

//Object
let person = {
    name: "Jabir",
    age: 21,
    isEmployed: true
};
console.log(person);
alert(JSON.stringify(person));

//Symbol
let uniqueID = Symbol("id");
console.log(uniqueID);
alert(uniqueID.toString());

// Using the type of Operator
console.log(typeof mohdicky);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof hobbies);
console.log(typeof bigNumber);
console.log(typeof notDefined);
console.log(typeof emptyValue);
console.log(typeof person);
console.log(typeof uniqueID);

alert("Type of mohdicky: " + typeof mohdicky + "\n" +
      "Type of age: " + typeof age + "\n" +
      "Type of isStudent: " + typeof isStudent + "\n" +
      "Type of hobbies: " + typeof hobbies + "\n" +
      "Type of bigNumber: " + typeof bigNumber + "\n" +
      "Type of notDefined: " + typeof notDefined + "\n" +
      "Type of emptyValue: " + typeof emptyValue + "\n" +
      "Type of person: " + typeof person + "\n" +
      "Type of uniqueID: " + typeof uniqueID);