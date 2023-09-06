// Task1

// Receive the day of the week and find out whether it is a holiday or a work day

var day = "Wednesday";
var activity;

switch (day) {
  case "Friday":
  case "Saturday":
    activity = "weekend";
    break;
  case "Sunday":
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    activity = "A workday";
    break;
  default:
    activity = "Unknown Day";
}

console.log("Today is", activity);

// Task2 && Task4

// Create an object that represents a person with name, age, and gender properties by Three ways

// First way

var person = {
  name: "Mohamed Omran",
  age: 21,
  gender: "Male",
};

console.log(person.name);
console.log(person.age);
console.log(person.gender);

// Second way

var person = new Object({ name: "Mo Omran", age: 25, gender: "Male" });

console.log(person.name);
console.log(person.age);
console.log(person.gender);

// Third way

var person = Object.create({});

person.name = "M.3mran";
person.age = 30;
person.gender = "Male";

console.log(person.name);
console.log(person.age);
console.log(person.gender);

// Task3

// Create a nested object that represents the shopping cart with the items and their quantities

var shoppingCart = {
  items: {
    apple: 5,
    banana: 3,
    peach: 7,
    grapes: 9,
  },
};
console.log(shoppingCart.items.apple);
console.log(shoppingCart.items.banana);

// Task5

// Use the appropriate method to check whether the text contains a specific word or phrase

var text = "The quick brown fox jumps over the lazy dog";

console.log(text.includes("fox"));

// Task6

// We have an array and we want to multiply each of its elements by 10 using the map method and print the result

var numbers = [1, 2, 3, 4, 5];

numbers.map(function (item) {
  console.log(item * 10);
});

// Task7

// The same example using filter returns any element of the array that it is greater than or equal to 4.

var numbers = [1, 2, 3, 4, 5];

var filteredNum = numbers.filter(function (item) {
  return item >= 4;
});
console.log(filteredNum);

// Search Task

var names =["mohamed","ahmed","ziad","sayed","victor","belal"];
console.log(names);
names.sort();
console.log(names);

