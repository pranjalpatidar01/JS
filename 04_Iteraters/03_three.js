// for each

//  ['', '', ''] array
// [{}, {}, {}] array with objects

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    // console.log(element);
    
}

const s = "Hello world"

for (const element of s) {
    console.log(element);
    
}

//  MAP
const map = new Map

map.set(1 ,'a')
map.set(2, 'b')
map.set(3, 'b')

for(const element of map) {
    // console.log(element);
}

for (const [key, values] of map) {
    // console.log(`key is ${key} and value is ${values}`);
    
}

const obj1 = {
    1 : 'pranjal',
    2 : 'me',
    3 : "hey"
}

for (const [key, values] of obj1) {
    console.log(`key is ${key} and value is ${values}`);
    
}