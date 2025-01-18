const hero = ['thor', "spiderman", "ironman"]
const dc = ["batman", "flash", "superman"]

console.log(hero);

hero.push(dc)

console.log(hero);

hero.pop()
console.log(hero);

const newarr = hero.concat(dc)

console.log(newarr);

const allhero = [...hero , ...dc]

console.log(allhero);

const arr = [1, 2, 3,[4, 5, 6], 7, [8, 9, 10]]

const newArr = arr.flat()

console.log(arr);

console.log(newArr);

newArr.push("Pranjal")

console.log(Array.isArray("Pranjal"));
console.log(Array.from("Pranjal"));
console.log(Array.from({name : "Pranjal"}));

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3));




