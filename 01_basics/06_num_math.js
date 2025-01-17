const score = 400

console.log(score);

const balance = new Number(100)

console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(3))

const othernum = 23.8645

console.log(othernum.toPrecision(2));
console.log(othernum.toPrecision(4));

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'));

// ******* Maths ******

console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(5.9));
console.log(Math.ceil(55.4))
console.log(Math.floor(5.5));
console.log(Math.sqrt(5));
console.log(Math.pow(5, 2));
console.log(Math.random());
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max- min +1)) + min);






