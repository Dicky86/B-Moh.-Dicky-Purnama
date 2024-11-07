// 1. Our First For Loop Practice
// Use a for loop to print out "Da ba dee da ba daa" exactly 6 times.
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
    alert("Da ba dee da ba daa");
}

// 2. For Loops Practice
// Write a for loop that counts down and prints: 25, 20, 15, 10, 5, 0
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
    alert(i);
}

// 3. Iterating Arrays Exercise
// Loop over the people array with a for loop, printing out each name in uppercase letters.
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
    alert(people[i].toUpperCase());
}