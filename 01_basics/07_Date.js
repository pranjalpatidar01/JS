let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 17)
let myCreatedDate = new Date(2025, 0, 17, 19, 23)

console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

let timeSpam = Date.now()

console.log(timeSpam); // this is in milisecond
console.log(myCreatedDate.getTime());

console.log(Math.round(Date.now()/1000)); // in seconds


let newDate = new Date();

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getDate());








