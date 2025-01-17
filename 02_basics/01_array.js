const myArr = [0, 1, 2, 3, 4] 

// shaloow copy shre the same reference point while deep copy has different reference points
console.log(myArr[0]);

const myhero = ["Spiderman", "Shaktiman"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods 

myArr.push(5)
myArr.push(6)

console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(1));

console.log(myArr.indexOf(2));
console.log(myArr.indexOf(9));


// const newArr = myArr.join() // change of array values to string

console.log(myArr);
// console.log(newArr); 

// Slice   Splice

console.log("A ", myArr);

const myn1 = myArr.slice(2, 4);

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(2,4)

console.log(myn2);
console.log(myArr);



