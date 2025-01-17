//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//  stack(Primitive) - get copy of the memory on defining
//   heap(Non primitive) - get reference of the memory (original value)

// Example

// stack
let a = 2;
let b = a

b = 5

console.log(a);
console.log(b);


// heap
let userOne = {
    email : "goggle.com",
    name : "Pranjal"
}

let userTwo = userOne

userTwo.email = "yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);


