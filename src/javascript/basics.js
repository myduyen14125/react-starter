// Primitive Type
const a = 1;

console.log(a);

const b = "string";

console.log(b);

// =========================================================
// Mutating a variable

let c = 1;

c = 3;

console.log(3);

// =========================================================
// Function

function combine(a, b) {
  return a + b;
}

console.log(combine(1, 2));

// =========================================================
// Arrow function
const combineArrowFn = (a, b) => {
  return a + b;
};

console.log(combineArrowFn(1, 2));

// Short-hand arrow function
const combineShortArrowFn = (a, b) => a + b;

console.log(combineShortArrowFn(1, 2));

// =========================================================
// Object

const person = {
  firstName: "Tri",
  lastName: "Pham",
};

console.log("person", person);

// Array

const integers = [1, 2, 3, 4, 5, 6, 7];

console.log("integers", integers);

const anotherPerson = {
  firstName: "Tri",
  lastName: "Pham",
};

const people = [person, anotherPerson];

console.log("people", people);

// =========================================================
// Object destructuring

const objectPerson = {
  firstName: "Tri",
  lastName: "Pham",
};
//
const { firstName, lastName } = objectPerson;

console.log("firstName", firstName);
console.log("lastName", lastName);

// Array destructuring

const userInfo = ["tvpham", 18, "mgm technology partner"]; // Tuple

const [username, age, workAt] = userInfo;

console.log("name", username);
console.log("age", age);
console.log("workAt", workAt);
