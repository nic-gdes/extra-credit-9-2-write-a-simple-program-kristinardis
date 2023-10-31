// Create a constant array variable with at least 5 items (animal names).
const animals = ["Lion", "Elephant", "Tiger", "Giraffe", "Zebra"];
console.log(animals);

// Iterate through the array and output each item in the console using a for loop.
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Create an object variable 'person' with 'firstName' and 'age' properties.
const person = {
    firstName: "John",
    age: 25
};

// Output the values of 'firstName' and 'age' to the console.
console.log("First Name: " + person.firstName);
console.log("Age: " + person.age);


// Check the age of the person with an if conditional statement.
if (person.age >= 21) {
    console.log("Take one down and pass it around");
} else {
    console.log("One fell down.");
}
